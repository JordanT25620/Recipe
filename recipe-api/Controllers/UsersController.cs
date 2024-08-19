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
    public IActionResult CreateUser([FromBody] CreateUserRequest userRequest) {

        ErrorOr<Created> createUserResult = _userService.CreateUser(userRequest);

        return createUserResult.Match(
            created => CreatedAtGetUser(userRequest),
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

    // [HttpPut("{id:guid}")]
    // public IActionResult UpsertUser([FromRoute] Guid id, [FromBody] CreateOrUpdateUserRequest userRequest) {

    //     ErrorOr<UpsertedUser> upsertUserResult = _userService.UpsertUser(id, userRequest);

    //     return upsertUserResult.Match(
    //         upsertedUser => upsertedUser.isNewlyCreated ? CreatedAtGetUser(userRequest) : NoContent(), 
    //         errors => Problem(errors)
    //     );
    // }

    [HttpPut("{id:guid}")]
    public IActionResult UpdateUser([FromRoute] Guid id, [FromBody] UpdateUserRequest userRequest) {

        ErrorOr<Updated> updateUserResult = _userService.UpdateUser(id, userRequest);

        return updateUserResult.Match(
            updated =>  NoContent(),
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

    private CreatedAtActionResult CreatedAtGetUser(CreateUserRequest userRequest){
        return CreatedAtAction(
            actionName: nameof(CreateUser),
            routeValues: new { username = userRequest.Username },
            value: userRequest.Username
        );
    }

    private CreatedAtActionResult CreatedAtGetUser(UpdateUserRequest userRequest){
        return CreatedAtAction(
            actionName: nameof(CreateUser),
            routeValues: new { username = userRequest.Username },
            value: userRequest.Username
        );
    }
}