using ErrorOr;
using Microsoft.AspNetCore.Mvc;
using Recipe.Requests.HttpModels.Auth;
using Recipe.Services.Auth;

namespace Recipe.Controllers;

public class AuthController : ApiController {

    private readonly IAuthService _authService;
    
    public AuthController(IAuthService authService){
        _authService = authService;
    }

    [HttpPost("")]
    public IActionResult Login([FromBody] LoginRequest loginCredentials) {

        ErrorOr<AuthenticatedUserResult> tokenResult = _authService.Authenticate(loginCredentials);

        return tokenResult.Match(
            success => Ok(tokenResult.Value),
            errors => Problem(errors)
        );
    } 
}