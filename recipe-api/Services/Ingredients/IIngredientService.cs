using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Requests.HttpModels.Recipes;

namespace Recipe.Services.Ingredients;

public interface IIngredientService {
    ErrorOr<Created> CreateIngredient(RecipeCreateIngredientRequest ingredient, Guid recipeId);
    List<IngredientDto> GetRecipeIngredients(Guid recipeId);
}