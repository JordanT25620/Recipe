using ErrorOr;
using Recipe.Requests.HttpModels.Auth;

namespace Recipe.Services.Auth;

public interface IAuthService {
    ErrorOr<AuthenticatedUserResult> Authenticate(LoginRequest loginCredentials);
}