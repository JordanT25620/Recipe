using ErrorOr;
using Recipe.Models.Enums;
using Recipe.Models.Schema;
using Recipe.ServiceErrors;

namespace Recipe.Requests.HttpModels.Recipes;

public record RecipeCreateIngredientRequest( 

    string Name,
    string OrderIndex,
    double? Amount,
    string? AmountUnits,
    string? Description
)
{
    public ErrorOr<Created> Validate(out int parsedOrderIndex){

        if (!convertOrderIndexToInt(OrderIndex, out parsedOrderIndex)){
            return Errors.Ingredient.UnableToParseInt;
        } else if (parsedOrderIndex < 1){
            return Errors.Ingredient.OrderIndexInvalid;
        }

        if (Amount is not null){
            if (AmountUnits is null){
                return Errors.Ingredient.MissingIngredientAmountUnits;
            } else if (Ingredient.convertAmountUnitsToEnum(AmountUnits) == IngredientAmountUnitsEnum.error) {
                return Errors.Ingredient.InvalidIngredientAmountUnit;
            }
        } else {
            if(AmountUnits is not null){
                return Errors.Ingredient.UnitsProvidedWithoutIngredientAmount;
            }
        }

        if (Description is not null){
            if (Description.Length > Ingredient.MAX_DESC_LENGTH){
                return Errors.Ingredient.DescriptionTooLong;
            }
        }

        return Result.Created;
    }

    public bool convertOrderIndexToInt(string orderIndexStr, out int orderIndex){
        return int.TryParse(orderIndexStr, out orderIndex); //Puts 0 in orderIndex if it fails
    }
};