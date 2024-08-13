using ErrorOr;
using Recipe.Data;
using Recipe.Models.Dto;
using Recipe.Models.Schema;
using Recipe.Requests.HttpModels.Users;
using Recipe.ServiceErrors;

namespace Recipe.Services.Users;

public class UserService : IUserService {

    private readonly ApplicationDbContext _dbContext;
    private const int REQUIRED_PASSWORD_LENGTH = 7;

    public UserService(ApplicationDbContext context){
        _dbContext = context;
    }

    public ErrorOr<Created> CreateUser(CreateOrUpdateUserRequest userRequest)
    {
        if (doesUserNameExist(userRequest.Username)){
            return Errors.User.UsernameExists;
        }

        if (userRequest.Password.Length < REQUIRED_PASSWORD_LENGTH){
            return Errors.User.PasswordLengthRequirement;
        }

        User user = new User(
            new Guid(),
            userRequest.Username,
            userRequest.Password,
            DateTime.UtcNow,
            DateTime.UtcNow
        );
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
        }

        if (userRequest.Password.Length < REQUIRED_PASSWORD_LENGTH){
            return Errors.User.PasswordLengthRequirement;
        }

        user.Username = userRequest.Username;
        user.Password = userRequest.Password;
        user.UpdatedAt = DateTime.UtcNow;

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