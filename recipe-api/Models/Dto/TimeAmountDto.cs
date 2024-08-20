using Recipe.Models.Enums;

namespace Recipe.Models.Dto;

public class TimeAmountDto {
    public double NumericAmount { get; set; }
    public TimeAmountUnitsEnum Units { get; set; }

    public TimeAmountDto (
        double numericAmount,
        TimeAmountUnitsEnum units
    ) {
        NumericAmount = numericAmount;
        Units = units;
    }

}
