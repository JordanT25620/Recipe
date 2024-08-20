using ErrorOr;
using Recipe.Models.Enums;
using Recipe.Models.Schema;
using Recipe.ServiceErrors;

namespace Recipe.Requests.HttpModels.Recipes;

public record CreateRecipeRequest(
    string CreatedByUserId,
    string Name,
    List<RecipeCreateIngredientRequest> Ingredients,
    string? Difficulty,
    double? NumericTimeAmount,
    string? TimeAmountUnits,
    string? Directions
)
{
    public ErrorOr<Created> Validate(){

        if (Ingredients.Count < 1){
            return Errors.Recipe.MustHaveIngredients;
        }

        if (Name.Length < RecipeObj.MIN_NAME_LENGTH){
            return Errors.Recipe.NameTooShort;
        } else if (Name.Length > RecipeObj.MAX_NAME_LENGTH){
            return Errors.Recipe.NameTooLong;
        }

        if (NumericTimeAmount is not null){
            if (TimeAmountUnits is null){
                return Errors.Recipe.MissingTimeAmountUnits;
            } else if (RecipeObj.convertTimeRequiredUnitsToEnum(TimeAmountUnits) == TimeAmountUnitsEnum.error) {
                return Errors.Recipe.InvalidTimeUnit;
            }
        } else {
            if(TimeAmountUnits is not null){
                return Errors.Recipe.UnitsProvidedWithoutTime;
            }
        }

        if (Directions is not null && Directions.Length > RecipeObj.MAX_DIRECTIONS_LENGTH){
            return Errors.Recipe.DirectionsTooLong;
        }

        int orderCounter = 1;
        foreach (var i in Ingredients){
            i.convertOrderIndexToInt(i.OrderIndex, out int parsedOrderIndex);
            if (parsedOrderIndex != orderCounter++){
                return Errors.Recipe.IngredientsOutOfOrder;
            }
        }
        return Result.Created;
    }
};