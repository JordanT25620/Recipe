using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Services.Users;
using Microsoft.AspNetCore.Mvc;
using Recipe.Requests.HttpModels.Users;

namespace Recipe.Controllers;

public class UsersController : ApiController {

    private readonly IUserService _userService;
    
    public UsersController(IUserService userService){
        _userService = userService;
    }

    [HttpPost("")]
    public IActionResult CreateUser([FromBody] CreateOrUpsertUserRequest user) {

        ErrorOr<Created> createUserResult = _userService.CreateUser(user);

        return createUserResult.Match(
            created => CreatedAtGetUser(user),
            errors => Problem(errors)
        );
    } 

    [HttpGet("{id:guid}")]
    public IActionResult GetUser([FromRoute] Guid id) {

        ErrorOr<UserDto> getUserResult = _userService.GetUser(id);

        return getUserResult.Match(
            user => Ok(user),
            errors => Problem(errors)
        );
    }

    [HttpPut("{id:guid}")]
    public IActionResult UpsertUser([FromRoute] Guid id, [FromBody] CreateOrUpsertUserRequest user) {

        ErrorOr<UpsertedUser> upsertUserResult = _userService.UpsertUser(id, user);

        return upsertUserResult.Match(
            upsertedUser => upsertedUser.isNewlyCreated ? CreatedAtGetUser(user) : NoContent(), 
            errors => Problem(errors)
        );
    }

    [HttpDelete("{id:guid}")]
    public IActionResult DeleteUser([FromRoute] Guid id) {

        ErrorOr<Deleted> deleteUserResult = _userService.DeleteUser(id);

        return deleteUserResult.Match(
            deleted => NoContent(),
            errors => Problem(errors)
        );
    }

    private CreatedAtActionResult CreatedAtGetUser(CreateOrUpsertUserRequest user){
        return CreatedAtAction(
            actionName: nameof(CreateUser),
            routeValues: new { username = user.Username },
            value: user
        );
    }
}