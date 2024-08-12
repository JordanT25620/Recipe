using Recipe.Models.Dto;
using Recipe.Models.Schema;

namespace Recipe.Repositories.Users;

public interface IUserRepository{
    void InsertUser(User user);
    UserDto GetUser(Guid id);
    void UpsertUser(Guid id, UserDto userDto);
    void DeleteUser(Guid id);
    bool doesUserExist(Guid id);
    User toUser(UserDto dto, string password);
    UserDto toDto(User user);
}