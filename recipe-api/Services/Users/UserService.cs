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

    public ErrorOr<Created> CreateUser(CreateUserRequest userRequest)
    {

        ErrorOr<Created> validationResults = userRequest.Validate();
        if (validationResults.IsError){
            return validationResults;
        }

        if (doesUserNameExist(userRequest.Username)){
            return Errors.User.UsernameExists;
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

    public ErrorOr<Updated> UpdateUser(Guid id, UpdateUserRequest userRequest)
    {
        var user = _dbContext.Users.Find(id);

        if (user is null){
            return Errors.User.NotFound;
        }

        if (user.Username != userRequest.Username){
            if (doesUserNameExist(userRequest.Username)){
                return Errors.User.UsernameExists;
            }
            ErrorOr<Updated> validationResults = userRequest.ValidateUsername();
            if (validationResults.IsError){
                return validationResults;
            }
        }

        if (user.Password != userRequest.Password){
            ErrorOr<Updated> validationResults = userRequest.ValidatePassword();
            if (validationResults.IsError){
                return validationResults;
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