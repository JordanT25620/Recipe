namespace Recipe.Requests.HttpModels.Auth;

public record LoginRequest(
    string Username,
    string Password
);