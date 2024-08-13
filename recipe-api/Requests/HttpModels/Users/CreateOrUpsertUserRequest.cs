namespace Recipe.Requests.HttpModels.Users;

public record CreateOrUpdateUserRequest(
    string Username,
    string Password
);