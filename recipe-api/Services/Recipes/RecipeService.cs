using ErrorOr;
using Recipe.Data;
using Recipe.Models.Dto;
using Recipe.Models.Schema;
using Recipe.Requests.HttpModels.Recipes;
using Recipe.ServiceErrors;
using Recipe.Services.Ingredients;
using Recipe.Services.Users;

namespace Recipe.Services.Recipes;

public class RecipeService : IRecipeService {

    private readonly ApplicationDbContext _dbContext;
    private readonly IUserService _userService;
    private readonly IIngredientService _ingredientService;

    public RecipeService(ApplicationDbContext context, IUserService userService, IIngredientService ingredientService){
        _dbContext = context;
        _userService = userService;
        _ingredientService = ingredientService;
    }

    public ErrorOr<Created> CreateRecipe(CreateRecipeRequest recipeRequest)
    {
        Guid guid;
        if (!Guid.TryParse(recipeRequest.CreatedByUserId, out guid)){
            return Errors.Recipe.GuidFailedParsing;
        }

        ErrorOr<Created> validationResults = recipeRequest.Validate();
        if (validationResults.IsError){
            return validationResults;
        }

        if(!_userService.doesUserExist(guid)){
            return Errors.Recipe.UserDoesNotExist;
        }

        RecipeObj recipe = new RecipeObj(
            new Guid(),
            recipeRequest.Name,
            guid,
            DateTime.UtcNow,
            DateTime.UtcNow,
            RecipeObj.convertDifficultyToEnum(recipeRequest.Difficulty) is null ? null : recipeRequest.Difficulty,
            recipeRequest.NumericTimeAmount,
            recipeRequest.TimeAmountUnits,
            recipeRequest.Directions
        );

        using (var transaction = _dbContext.Database.BeginTransaction()){
            _dbContext.Recipes.Add(recipe);
            _dbContext.SaveChanges();

            foreach (var i in recipeRequest.Ingredients){
                var createIngredientResult = _ingredientService.CreateIngredient(i, recipe.Id);
                if (createIngredientResult.IsError){
                    transaction.Rollback();
                    return createIngredientResult;
                }
            }
            transaction.Commit();
        }

        return Result.Created;
    }

    public ErrorOr<List<RecipeDto>> GetUserRecipes(Guid id)
    {
        var user = _dbContext.Users.Find(id);
        if (user is null) {
            return Errors.Recipe.UserDoesNotExist;
        }
        var userDto = user.toDto();

        var userRecipes = _dbContext.Recipes.Where(r => r.CreatedByUserId == id).ToList();
        
        var results = new List<RecipeDto>();
    
        foreach (var recipe in userRecipes)
        {
            results.Add(
                recipe.toDto(
                    userDto,
                    _ingredientService.GetRecipeIngredients(recipe.Id)
                )
            );
        }

        return results;
    }
}