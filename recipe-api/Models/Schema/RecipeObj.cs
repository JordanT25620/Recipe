using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Recipe.Models.Dto;
using Recipe.Models.Enums;

namespace Recipe.Models.Schema;

[Table("recipes", Schema = "data")]
public class RecipeObj {

    //Requirements will be used in RecipeConfigurations.cs for the actual Postgres column limits.
    //Will also be checked on the UI and Service layer.
    public static readonly int MIN_NAME_LENGTH = 1;
    public static readonly int MAX_NAME_LENGTH = 100;
    public static readonly int MAX_DIRECTIONS_LENGTH = 1000;

#nullable disable

    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("name")]
    [Required]
    public string Name { get; set; }

    [Column("createdByUserId")]
    [Required]
    public Guid CreatedByUserId { get; set; }

    [Column("createdAt")]
    [Required]
    public DateTime CreatedAt { get; set; }

    [Column("updatedAt")]
    [Required]
    public DateTime UpdatedAt { get; set; }

#nullable enable

    [Column("difficulty")]
    public string? Difficulty { get; set; }

    [Column("timeRequired")]
    public double? TimeRequired { get; set; }

    [Column("timeRequiredUnits")]
    public string? TimeRequiredUnits { get; set; }

    [Column("directions")]
    public string? Directions { get; set; }

    public RecipeObj (
        Guid id,
        string name,
        Guid createdByUserId,
        DateTime createdAt,
        DateTime updatedAt,
        string? difficulty,
        double? timeRequired,
        string? timeRequiredUnits,
        string? directions
    ) {
        Id = id;
        Name = name;
        CreatedByUserId = createdByUserId;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
        Difficulty = difficulty;
        TimeRequired = timeRequired;
        TimeRequiredUnits = timeRequiredUnits;
        Directions = directions;
    }

    public RecipeDto toDto(UserDto createdByUser, List<IngredientDto> ingredients){
        return new RecipeDto(
            Id,
            Name,
            createdByUser,
            ingredients,
            CreatedAt,
            UpdatedAt,
            convertDifficultyToEnum(Difficulty),
            TimeRequired is null ? 
                null : new TimeAmountDto
                (
                    (double) TimeRequired, 
                    convertTimeRequiredUnitsToEnum(TimeRequiredUnits)
                ),
            Directions
        );
    }

    public static DifficultyEnum? convertDifficultyToEnum(string? difficultyStr){ 
        DifficultyEnum? difficulty;
        switch (difficultyStr) {
            case "simple":
                difficulty = DifficultyEnum.simple; break;
            case "moderate":
                difficulty = DifficultyEnum.moderate; break;
            case "challenging":
                difficulty = DifficultyEnum.challenging; break;
            default:
                difficulty = null; break;
        }
        return difficulty;
    }

    public static TimeAmountUnitsEnum convertTimeRequiredUnitsToEnum(string? timeRequiredUnitsStr){ 
        TimeAmountUnitsEnum timeRequiredUnits;
        switch (timeRequiredUnitsStr) {
            case "sec":
                timeRequiredUnits = TimeAmountUnitsEnum.sec; break;
            case "min":
                timeRequiredUnits = TimeAmountUnitsEnum.min; break;
            case "hr":
                timeRequiredUnits = TimeAmountUnitsEnum.hr; break;
            default:
                timeRequiredUnits = TimeAmountUnitsEnum.error; break;
        }
        return timeRequiredUnits;
    }

}