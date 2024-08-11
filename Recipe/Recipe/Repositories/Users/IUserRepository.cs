using Recipe.Models;
using Recipe.Models.Dto;

namespace Recipe.Repositories.Users;

public interface IUserRepository{
    void InsertUser(UserDto user);
    UserDto GetUser(Guid id);
    void UpsertUser(Guid id, UserDto user);
    void DeleteUser(Guid id);
    bool doesUserExist(Guid id);
    User toUser(UserDto dto, string password);
    UserDto toDto(User user);
}