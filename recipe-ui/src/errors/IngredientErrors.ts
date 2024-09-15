const IngredientErrors: Record<string, string> = {
    "Ingredient.DescriptionTooLong": "Ingredient description exceeds max character length",
    "Ingredient.MissingIngredientAmountUnits": "Ingredient amount units missing",
    "Ingredient.InvalidIngredientAmountUnit": "Ingredient amount unit provided does not exist",
    "Ingredient.UnitsProvidedWithoutIngredientAmount": "A unit of ingredient measurement was provided without a numeric amount",
    "Ingredient.OrderIndexInvalid": "A positive non-zero number should be provided for each ingredient",
    "Ingredient.UnableToParseInt": "Unable to parse an int from a provided string value"
}

export default IngredientErrors;