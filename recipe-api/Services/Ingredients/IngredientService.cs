using ErrorOr;
using Recipe.Data;
using Recipe.Models.Dto;
using Recipe.Models.Enums;
using Recipe.Models.Schema;
using Recipe.Requests.HttpModels.Recipes;
using Recipe.Requests.HttpModels.Users;
using Recipe.ServiceErrors;

namespace Recipe.Services.Ingredients;

public class IngredientService : IIngredientService {

    private readonly ApplicationDbContext _dbContext;

    public IngredientService(ApplicationDbContext context){
        _dbContext = context;
    }

    public ErrorOr<Created> CreateIngredient(RecipeCreateIngredientRequest ingredientRequest, Guid recipeId)
    {

        ErrorOr<Created> validationResults = ingredientRequest.Validate(out int parsedOrderIndex);
        if (validationResults.IsError){
            return validationResults;
        }

        Ingredient ingredient = new Ingredient(
            new Guid(),
            recipeId,
            ingredientRequest.Name,
            parsedOrderIndex,
            DateTime.UtcNow,
            DateTime.UtcNow,
            ingredientRequest.Amount,
            ingredientRequest.AmountUnits,
            ingredientRequest.Description
        );

        _dbContext.Ingredients.Add(ingredient);
        _dbContext.SaveChanges();

        return Result.Created;
    }
}