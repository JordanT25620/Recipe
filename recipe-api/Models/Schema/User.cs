using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Recipe.Models.Dto;

namespace Recipe.Models.Schema;

[Table("users", Schema = "data")]
public class User {

#nullable disable

    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("username")]
    [Required]
    public string Username { get; set; }

    [Column("password")]
    [StringLength(30)]
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