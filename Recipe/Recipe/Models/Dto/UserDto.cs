namespace Recipe.Models.Dto;

public class UserDto {
    public Guid Id { get; set;}
    public string Username { get; set; }

    public UserDto (
        Guid id,
        string username
    ) {
        Id = id;
        Username = username;
    }

}