using ErrorOr;
using Recipe.Models.Dto;
using Recipe.Requests.HttpModels.Users;

namespace Recipe.Services.Users;

public interface IUserService {
    ErrorOr<Created> CreateUser(CreateOrUpsertUserRequest userRequest);
    ErrorOr<UserDto> GetUser(Guid id);
    ErrorOr<UpsertedUser> UpsertUser(Guid id, CreateOrUpsertUserRequest userRequest);
    ErrorOr<Deleted> DeleteUser(Guid id);
}