using Microsoft.AspNetCore.Mvc;

namespace Recipe.Controllers;

public class ErrorsController : ControllerBase {

    [Route("/error")]
    public IActionResult Error(){
        return Problem();
    }
}