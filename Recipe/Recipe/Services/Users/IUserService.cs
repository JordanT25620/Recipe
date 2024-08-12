using ErrorOr;
using Recipe.Models.Dto;

namespace Recipe.Services.Users;

public interface IUserService {
    ErrorOr<Created> CreateUser(UserDto user);
    ErrorOr<UserDto> GetUser(Guid id);
    ErrorOr<UpsertedUser> UpsertUser(Guid id, UserDto user);
    ErrorOr<Deleted> DeleteUser(Guid id);
}