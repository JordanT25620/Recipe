using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Services.Users;
using Microsoft.AspNetCore.Mvc;

namespace Recipe.Controllers;

public class UsersController : ApiController {

    private readonly IUserService _userService;
    
    public UsersController(IUserService userService){
        _userService = userService;
    }

    [HttpPost("")]
    public IActionResult CreateUser([FromBody] UserDto userDto) {

        ErrorOr<Created> createUserResult = _userService.CreateUser(userDto);

        return createUserResult.Match(
            created => CreatedAtGetUser(userDto),
            errors => Problem(errors)
        );
    } 

    [HttpGet("{id:guid}")]
    public IActionResult GetUser(Guid id) {

        ErrorOr<UserDto> getUserResult = _userService.GetUser(id);

        return getUserResult.Match(
            user => Ok(user),
            errors => Problem(errors)
        );
    }

    [HttpPut("{id:guid}")]
    public IActionResult UpsertUser([FromRoute] Guid id, [FromBody] UserDto userDto) {

        ErrorOr<UpsertedUser> upsertUserResult = _userService.UpsertUser(id, userDto);

        return upsertUserResult.Match(
            upsertedUser => upsertedUser.isNewlyCreated ? CreatedAtGetUser(userDto) : NoContent(), 
            errors => Problem(errors)
        );
    }

    [HttpDelete("{id:guid}")]
    public IActionResult DeleteUser(Guid id) {

        ErrorOr<Deleted> deleteUserResult = _userService.DeleteUser(id);

        return deleteUserResult.Match(
            deleted => NoContent(),
            errors => Problem(errors)
        );
    }

    private CreatedAtActionResult CreatedAtGetUser(UserDto userDto){
        return CreatedAtAction(
            actionName: nameof(CreateUser),
            routeValues: new { id = userDto.Id },
            value: userDto
        );
    }
}