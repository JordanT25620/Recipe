const RecipeErrors: Record<string, string> = {
    "Recipe.GuidFailedParsing": "Failed to parse a provided string into a Guid",
    "Recipe.MissingTimeAmountUnits": "Time amount units missing",
    "Recipe.InvalidTimeUnit": "Time amount unit provided does not exist",
    "Recipe.UnitsProvidedWithoutTime": "A unit of time was provided without a value of time",
    "Recipe.UserDoesNotExist": "The provided user id does not match a valid user",
    "Recipe.NameTooShort": "Recipe name does not meet minimum length requirements",
    "Recipe.NameTooLong": "Recipe name exceeds the maximum length requirements",
    "Recipe.DirectionsTooLong": "Directions exceed the maximum length requirements",
    "Recipe.IngredientsOutOfOrder": "Ingredients should be supplied with order indices starting with 1 and incrementing by 1. No gaps are allowed. Correct example: 1, 2, 3, 4... ",
    "Recipe.MustHaveIngredients": "At least 1 ingredient must be provided to save a recipe",
    "Recipe.NotFound": "Recipe not found."
}

export default RecipeErrors;