using Recipe.Models.Enums;

namespace Recipe.Models.Dto;

public class IngredientAmountDto {
    public double NumericAmount { get; set; }
    public IngredientAmountUnitsEnum Units { get; set; }

    public IngredientAmountDto (
        double numericAmount,
        IngredientAmountUnitsEnum units
    ) {
        NumericAmount = numericAmount;
        Units = units;
    }

}
