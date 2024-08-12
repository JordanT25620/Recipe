namespace Recipe.Requests.HttpModels.Users;

public record CreateOrUpsertUserRequest(
    string Username,
    string Password
);