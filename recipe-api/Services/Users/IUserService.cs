using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Requests.HttpModels.Users;

namespace Recipe.Services.Users;

public interface IUserService {
    ErrorOr<Created> CreateUser(CreateOrUpdateUserRequest userRequest);
    ErrorOr<UserDto> GetUser(Guid id);
    // ErrorOr<UpsertedUser> UpsertUser(Guid id, CreateOrUpdateUserRequest userRequest);
    ErrorOr<Updated> UpdateUser(Guid id, CreateOrUpdateUserRequest userRequest);
    ErrorOr<Deleted> DeleteUser(Guid id);
    bool doesUserExist(Guid id);
    bool doesUserNameExist(String username);
}