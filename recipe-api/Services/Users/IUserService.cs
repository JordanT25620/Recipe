using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Requests.HttpModels.Users;

namespace Recipe.Services.Users;

public interface IUserService {
    ErrorOr<Created> CreateUser(CreateUserRequest userRequest);
    ErrorOr<UserDto> GetUser(Guid id);
    // ErrorOr<UpsertedUser> UpsertUser(Guid id, CreateOrUpdateUserRequest userRequest);
    ErrorOr<Updated> UpdateUser(Guid id, UpdateUserRequest userRequest);
    ErrorOr<Deleted> DeleteUser(Guid id);
    bool doesUserExist(Guid id);
    bool doesUserNameExist(String username);
}