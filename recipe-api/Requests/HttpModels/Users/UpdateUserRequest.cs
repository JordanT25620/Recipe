using ErrorOr;
using Recipe.Models.Schema;
using Recipe.ServiceErrors;

namespace Recipe.Requests.HttpModels.Users;

public record UpdateUserRequest(
    string Username,
    string Password
)
{

    public ErrorOr<Updated> ValidateUsername(){
        if (Username.Length < User.MIN_USERNAME_LENGTH){
            return Errors.User.UsernameTooShort;
        } else if (Username.Length > User.MAX_USERNAME_LENGTH){
            return Errors.User.UsernameTooLong;
        }
        return Result.Updated;
    }

    public ErrorOr<Updated> ValidatePassword(){
        if (Password.Length < User.MIN_PASSWORD_LENGTH){
            return Errors.User.PasswordTooShort;
        } else if (Password.Length > User.MAX_PASSWORD_LENGTH){
            return Errors.User.PasswordTooLong;
        }
        return Result.Updated;
    }
};