namespace Recipe.Models.Dto;

public class IngredientDto {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int OrderIndex { get; set; }
    public string? Description { get; set; } 
    public IngredientAmountDto? IngredientAmount { get; set; }

    public IngredientDto (
        Guid id,
        string name, 
        string? description,
        int orderIndex,
        IngredientAmountDto? ingredientAmount
    ) {
        Id = id;
        Name = name;
        Description = description;
        OrderIndex = orderIndex;
        IngredientAmount = ingredientAmount;
    }

}