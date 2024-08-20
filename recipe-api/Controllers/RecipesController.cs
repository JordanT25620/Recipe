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

    private CreatedAtActionResult CreatedAtGetRecipe(CreateRecipeRequest recipeRequest){
        return CreatedAtAction(
            actionName: nameof(CreateRecipe),
            routeValues: new { recipeName = recipeRequest.Name },
            value: recipeRequest.Name
        );
    }
}