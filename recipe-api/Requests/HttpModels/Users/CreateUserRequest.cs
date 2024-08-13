namespace Recipe.Requests.HttpModels.Users;

public record CreateUserRequest(
    string Username,
    string Password
);