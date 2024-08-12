using Recipe.Data;
using Recipe.Models;
using Recipe.Models.Dto;

namespace Recipe.Repositories.Users;

public class UserRepository : IUserRepository
{

    private readonly ApplicationDbContext _context;

    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public void DeleteUser(Guid id)
    {
        throw new NotImplementedException();
    }

    public bool doesUserExist(Guid id)
    {
        throw new NotImplementedException();
    }

    public UserDto GetUser(Guid id)
    {
        throw new NotImplementedException();
    }

    public void InsertUser(UserDto user)
    {
        throw new NotImplementedException();
    }

    public UserDto toDto(User user)
    {
        return new UserDto(user.Id, user.Username);;
    }

    public User toUser(UserDto dto, string password)
    {
        return new User(dto.Id, dto.Username, password, DateTime.UtcNow, DateTime.UtcNow);
    }

    public void UpsertUser(Guid id, UserDto user)
    {
        throw new NotImplementedException();
    }
}