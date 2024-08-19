using ErrorOr;
using Recipe.Models.Enums;

namespace Recipe.Models.Dto;

public class RecipeDto {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public UserDto CreatedByUser { get; set; }
    public List<IngredientDto> Ingredients { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DifficultyEnum? Difficulty { get; set; }
    public TimeAmountDto? TimeAmount { get; set; }
    public string? Directions { get; set; }
    
    public RecipeDto (
        Guid id,
        string name,
        UserDto createdByUser,
        List<IngredientDto> ingredients,
        DateTime createdAt, 
        DateTime updatedAt,
        DifficultyEnum? difficulty,
        TimeAmountDto? timeAmount,
        string? directions
    ) {
        Id = id;
        Name = name;
        CreatedByUser = createdByUser;
        Ingredients = ingredients;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
        Difficulty = difficulty;
        TimeAmount = timeAmount;
        Directions = directions;
    }
}