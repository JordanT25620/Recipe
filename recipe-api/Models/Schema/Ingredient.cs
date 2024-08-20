using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Recipe.Models.Dto;
using Recipe.Models.Enums;

namespace Recipe.Models.Schema;

[Table("ingredients", Schema = "data")]
public class Ingredient {

    //Max requirements will be used in IngredientConfigurations.cs for the actual Postgres column limits.
    //Will also be checked on the UI and Service layer.
    public static readonly int MAX_DESC_LENGTH = 100;

#nullable disable

    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("recipeId")]
    public Guid RecipeId { get; set; }

    [Column("name")]
    [Required]
    public string Name { get; set; }

    [Column("orderIndex")]
    [Required]
    public int OrderIndex { get; set; }

    [Column("createdAt")]
    [Required]
    public DateTime CreatedAt { get; set; }

    [Column("updatedAt")]
    [Required]
    public DateTime UpdatedAt { get; set; }

#nullable enable

    [Column("amount")]
    public double? Amount { get; set; }

    [Column("amountUnits")]
    public string? AmountUnits { get; set; }

    [Column("description")]
    public string? Description { get; set; }

    public Ingredient (
        Guid id,
        Guid recipeId,
        string name,
        int orderIndex,
        DateTime createdAt,
        DateTime updatedAt,
        double? amount,
        string? amountUnits,
        string? description
    ) {
        Id = id;
        RecipeId = recipeId;
        Name = name;
        OrderIndex = orderIndex;
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
        Amount = amount;
        AmountUnits = amountUnits;
        Description = description;
    }

    public IngredientDto toDto()
    {
        return new IngredientDto(
            Id, 
            Name, 
            Description, 
            OrderIndex, 
            Amount is null ? 
                null : new IngredientAmountDto
                (
                    (double) Amount, 
                    convertAmountUnitsToEnum(AmountUnits)
                )
        );
    }

    public static IngredientAmountUnitsEnum convertAmountUnitsToEnum(string? amountUnits){
        IngredientAmountUnitsEnum units;
        switch (amountUnits) {
            case "grams":
                units = IngredientAmountUnitsEnum.grams; break;
            case "ounces":
                units = IngredientAmountUnitsEnum.ounces; break;
            case "lbs":
                units = IngredientAmountUnitsEnum.lbs; break;
            default:
                units = IngredientAmountUnitsEnum.error; break;
        }
        return units;
    }

}