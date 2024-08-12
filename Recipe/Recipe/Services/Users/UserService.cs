using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Models.Schema;
using Recipe.Repositories.Users;
using Recipe.Requests.HttpModels.Users;

namespace Recipe.Services.Users;

public class UserService : IUserService {

    private readonly IUserRepository _userRepository;
    //private readonly ISomeOtherRepository _someOtherRepository;

    public UserService(IUserRepository userRepository){
        _userRepository = userRepository;
    }

    public ErrorOr<Created> CreateUser(CreateOrUpsertUserRequest userRequest)
    {
        User user = new User(
            new Guid(),
            userRequest.Username,
            userRequest.Password,
            DateTime.UtcNow,
            DateTime.UtcNow
        );
        _userRepository.InsertUser(user);
        return Result.Created;
    }

    public ErrorOr<UserDto> GetUser(Guid id)
    {
        /*
        if (user is found in the DB){
            return user;
        }

        return Errors.User.NotFound;
        */
        throw new NotImplementedException();
    }

    public ErrorOr<UpsertedUser> UpsertUser(Guid id, CreateOrUpsertUserRequest userRequest)
    {
        var isNewlyCreated = false; //check db to see if the user already exists - if not, it will be created.
        //Insert (or update) the user here.
        return new UpsertedUser(isNewlyCreated);
    }

    public ErrorOr<Deleted> DeleteUser(Guid id)
    {
        return Result.Deleted;
    }

}