using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Recipe.Models.Dto;

namespace Recipe.Models.Schema;

[Table("users", Schema = "data")]
public class User {

#nullable disable

    //Min requirements will be checked on UI and Service layer.
    public static readonly int MIN_USERNAME_LENGTH = 2;
    public static readonly int MIN_PASSWORD_LENGTH = 7;

    //Max requirements will be used in UserConfigurations.cs for the actual Postgres column limits.
    //Will also be checked on the UI and Service layer.
    public static readonly int MAX_PASSWORD_LENGTH = 40; //This requirement is for the password itself, not the hash.
    public static readonly int MAX_USERNAME_LENGTH = 30;


    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("username")]
    [Required]
    public string Username { get; set; }

    [Column("password")]
    [Required]
    public string Password { get; set; }

    [Column("createdAt")]
    [Required]
    public DateTime CreatedAt { get; set; }

    [Column("updatedAt")]
    [Required]
    public DateTime UpdatedAt { get; set; }

#nullable enable

    public User (
        Guid id,
        string username,
        string password,
        DateTime createdAt,
        DateTime updatedAt
    ) {
        Id = id;
        Username = username;
        Password = password;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
    }

    public UserDto toDto()
    {
        return new UserDto(Id, Username);
    }

}