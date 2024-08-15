using ErrorOr;
using Microsoft.AspNetCore.Identity;
using Recipe.Data;
using Recipe.Models.Dto;
using Recipe.Models.Schema;
using Recipe.Requests.HttpModels.Users;
using Recipe.ServiceErrors;

namespace Recipe.Services.Users;

public class UserService : IUserService {

    private readonly ApplicationDbContext _dbContext;
    private readonly PasswordHasher<User> _passwordHasher;

    public UserService(ApplicationDbContext context){
        _dbContext = context;
        _passwordHasher = new PasswordHasher<User>();
    }

    public ErrorOr<Created> CreateUser(CreateOrUpdateUserRequest userRequest)
    {
        if (doesUserNameExist(userRequest.Username)){
            return Errors.User.UsernameExists;
        }

        if (userRequest.Username.Length < User.MIN_USERNAME_LENGTH){
            return Errors.User.UsernameTooShort;
        } else if (userRequest.Username.Length > User.MAX_USERNAME_LENGTH){
            return Errors.User.UsernameTooLong;
        }

        if (userRequest.Password.Length < User.MIN_USERNAME_LENGTH){
            return Errors.User.PasswordTooShort;
        } else if (userRequest.Password.Length > User.MAX_PASSWORD_LENGTH){
            return Errors.User.PasswordTooLong;
        }

        User user = new User(
            new Guid(),
            userRequest.Username,
            userRequest.Password,
            DateTime.UtcNow,
            DateTime.UtcNow
        );
        user.Password = _passwordHasher.HashPassword(user, userRequest.Password);

        _dbContext.Users.Add(user);
        _dbContext.SaveChanges();

        return Result.Created;
    }

    public ErrorOr<UserDto> GetUser(Guid id)
    {
        var user = _dbContext.Users.Find(id);
        if (user is null) {
            return Errors.User.NotFound;
        }
        return user.toDto();
    }

    public ErrorOr<Updated> UpdateUser(Guid id, CreateOrUpdateUserRequest userRequest)
    {
        var user = _dbContext.Users.Find(id);

        if (user is null){
            return Errors.User.NotFound;
        }

        if (user.Username != userRequest.Username){
            if (doesUserNameExist(userRequest.Username)){
                return Errors.User.UsernameExists;
            }
            if (userRequest.Username.Length < User.MIN_USERNAME_LENGTH){
                return Errors.User.UsernameTooShort;
            } else if (userRequest.Username.Length > User.MAX_USERNAME_LENGTH){
                return Errors.User.UsernameTooLong;
            }
        }

        if (user.Password != userRequest.Password){
            if (userRequest.Password.Length < User.MIN_PASSWORD_LENGTH){
                return Errors.User.PasswordTooShort;
            } else if (userRequest.Password.Length > User.MAX_PASSWORD_LENGTH){
                return Errors.User.PasswordTooLong;
            }
        }

        user.Username = userRequest.Username;
        user.UpdatedAt = DateTime.UtcNow;
        user.Password = _passwordHasher.HashPassword(user, userRequest.Password);

        _dbContext.Users.Update(user);
        _dbContext.SaveChanges();

        return Result.Updated;
    }

    public ErrorOr<Deleted> DeleteUser(Guid id)
    {
        var user = _dbContext.Users.Find(id);
        if (user is null) {
            return Errors.User.NotFound;
        }
        _dbContext.Users.Remove(user);
        _dbContext.SaveChanges();

        return Result.Deleted;
    }

    public bool doesUserExist(Guid id)
    {
        return _dbContext.Users.Any(u => u.Id == id);
    }

    public bool doesUserNameExist(String username)
    {
        return _dbContext.Users.Any(u => u.Username == username);
    }

}