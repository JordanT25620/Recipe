using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Requests.HttpModels.Recipes;

namespace Recipe.Services.Ingredients;

public interface IIngredientService {
    ErrorOr<Created> CreateIngredient(RecipeCreateIngredientRequest ingredient, Guid recipeId);
    // ErrorOr<UserDto> GetRecipe(Guid id);
    // ErrorOr<Updated> UpdateRecipe(Guid id, CreateOrUpdateRecipeRequest recipeRequest);
    // ErrorOr<Deleted> DeleteRecipe(Guid id);
}