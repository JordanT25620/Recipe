using ErrorOr;
using Recipe.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Recipe.Requests.HttpModels.Recipes;
using Recipe.Services.Recipes;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;

namespace Recipe.Controllers;

public class RecipesController : ApiController {

    private readonly IRecipeService _recipeService;
    
    public RecipesController(IRecipeService recipeService){
        _recipeService = recipeService;
    }

    [HttpPost("")]
    [Authorize]
    public IActionResult CreateRecipe([FromBody] CreateRecipeRequest recipeRequest) {

        ErrorOr<Created> createRecipeResult = _recipeService.CreateRecipe(recipeRequest);

        return createRecipeResult.Match(
            created => CreatedAtGetRecipe(recipeRequest),
            errors => Problem(errors)
        );
    }

    [HttpGet("{id:guid}")]
    public IActionResult GetRecipe([FromRoute] Guid id) {

        ErrorOr<RecipeDto> getRecipeResult = _recipeService.GetRecipe(id);

        return getRecipeResult.Match(
            recipe => Ok(recipe),
            errors => Problem(errors)
        );
    }

    private CreatedAtActionResult CreatedAtGetRecipe(CreateRecipeRequest recipeRequest){
        return CreatedAtAction(
            actionName: nameof(CreateRecipe),
            routeValues: new { recipeName = recipeRequest.Name },
            value: recipeRequest.Name
        );
    }
}