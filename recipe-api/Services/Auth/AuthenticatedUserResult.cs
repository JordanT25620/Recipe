using Recipe.Models.Dto;

namespace Recipe.Services.Auth;

public record struct AuthenticatedUserResult(
    string token,
    UserDto user
);