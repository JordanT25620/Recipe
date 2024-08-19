using ErrorOr;
using Recipe.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Recipe.Requests.HttpModels.Recipes;
using Recipe.Services.Recipes;
using System.ComponentModel.DataAnnotations;

namespace Recipe.Controllers;

public class RecipesController : ApiController {

    private readonly IRecipeService _recipeService;
    
    public RecipesController(IRecipeService recipeService){
        _recipeService = recipeService;
    }

    [HttpPost("")]
    public IActionResult CreateRecipe([FromBody] CreateRecipeRequest recipeRequest) {

        ErrorOr<Created> createRecipeResult = _recipeService.CreateRecipe(recipeRequest);

        return createRecipeResult.Match(
            created => CreatedAtGetRecipe(recipeRequest),
            errors => Problem(errors)
        );
    }

    // [HttpGet("{id:guid}")]
    // public IActionResult GetRecipe([FromRoute] Guid id) {

    //     ErrorOr<RecipeDto> getRecipeResult = _recipeService.GetRecipe(id);

    //     return getRecipeResult.Match(
    //         recipe => Ok(recipe),
    //         errors => Problem(errors)
    //     );
    // }

    // [HttpPut("{id:guid}")]
    // public IActionResult UpsertRecipe([FromRoute] Guid id, [FromBody] CreateOrUpdateRecipeRequest recipeRequest) {

    //     ErrorOr<UpsertedRecipe> upsertRecipeResult = _recipeService.UpsertRecipe(id, recipeRequest);

    //     return upsertRecipeResult.Match(
    //         upsertedRecipe => upsertedRecipe.isNewlyCreated ? CreatedAtGetRecipe(recipeRequest) : NoContent(), 
    //         errors => Problem(errors)
    //     );
    // }

    // [HttpPut("{id:guid}")]
    // public IActionResult UpdateRecipe([FromRoute] Guid id, [FromBody] CreateOrUpdateRecipeRequest recipeRequest) {

    //     ErrorOr<Updated> updateRecipeResult = _recipeService.UpdateRecipe(id, recipeRequest);

    //     return updateRecipeResult.Match(
    //         updated =>  NoContent(),
    //         errors => Problem(errors)
    //     );
    // }

    // [HttpDelete("{id:guid}")]
    // public IActionResult DeleteRecipe([FromRoute] Guid id) {

    //     ErrorOr<Deleted> deleteRecipeResult = _recipeService.DeleteRecipe(id);

    //     return deleteRecipeResult.Match(
    //         deleted => NoContent(),
    //         errors => Problem(errors)
    //     );
    // }

    private CreatedAtActionResult CreatedAtGetRecipe(CreateRecipeRequest recipeRequest){
        return CreatedAtAction(
            actionName: nameof(CreateRecipe),
            routeValues: new { recipeName = recipeRequest.Name },
            value: recipeRequest.Name
        );
    }
}