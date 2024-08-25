using Microsoft.AspNetCore.Mvc;

namespace Recipe.Controllers;

public class ErrorsController : ControllerBase {

    [HttpGet("/error")]
    public IActionResult Error(){
        return Problem();
    }
}