using ErrorOr;
using Recipe.Requests.HttpModels.Recipes;

namespace Recipe.Services.Recipes;

public interface IRecipeService {
    ErrorOr<Created> CreateRecipe(CreateRecipeRequest recipeRequest);
    //ErrorOr<RecipeDto> GetRecipe(Guid id);
    //ErrorOr<Updated> UpdateRecipe(Guid id, CreateRecipeRequest recipeRequest);
    //ErrorOr<Deleted> DeleteRecipe(Guid id);
}