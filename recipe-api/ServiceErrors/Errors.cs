using ErrorOr;

namespace Recipe.ServiceErrors;

public static class Errors{
    public static class User{
        public static Error NotFound => Error.NotFound(
            code: "User.NotFound",
            description: "User not found"
        );
        public static Error UsernameExists => Error.Conflict(
            code: "User.UsernameExists",
            description: "Username already exists"
        );
        public static Error UsernameTooShort => Error.Validation(
            code: "User.UsernameTooShort",
            description: "Username does not meet minimum length requirements"
        );
        public static Error PasswordTooShort => Error.Validation(
            code: "User.PasswordTooShort",
            description: "Password does not meet minimum length requirements"
        );
        public static Error UsernameTooLong => Error.Validation(
            code: "User.UsernameTooLong",
            description: "Username exceeds the maximum length requirements"
        );
        public static Error PasswordTooLong => Error.Validation(
            code: "User.PasswordTooLong",
            description: "Password exceeds the maximum length requirements"
        );
    }
    public static class Auth{
        public static Error InvalidCredentials => Error.NotFound(
            code: "Auth.InvalidCredentials",
            description: "Credentials are invalid or account does not exist"
        );
    }

    public static class Recipe{
        public static Error GuidFailedParsing => Error.Validation(
            code: "Recipe.GuidFailedParsing",
            description: "Failed to parse a provided string into a Guid"
        );
        public static Error MissingTimeAmountUnits => Error.Validation(
            code: "Recipe.MissingTimeAmountUnits",
            description: "Time amount units missing"
        );
        public static Error InvalidTimeUnit => Error.Validation(
            code: "Recipe.InvalidTimeUnit",
            description: "Time amount unit provided does not exist"
        );
        public static Error UnitsProvidedWithoutTime => Error.Validation(
            code: "Recipe.UnitsProvidedWithoutTime",
            description: "A unit of time was provided without a value of time"
        );
        public static Error UserDoesNotExist => Error.Validation(
            code: "Recipe.UserDoesNotExist",
            description: "The provided user id does not match a valid user"
        );
        public static Error NameTooShort => Error.Validation(
            code: "Recipe.NameTooShort",
            description: "Recipe name does not meet minimum length requirements"
        );
        public static Error NameTooLong => Error.Validation(
            code: "Recipe.NameTooLong",
            description: "Recipe name exceeds the maximum length requirements"
        );
        public static Error DirectionsTooLong => Error.Validation(
            code: "Recipe.DirectionsTooLong",
            description: "Directions exceed the maximum length requirements"
        );
        public static Error IngredientsOutOfOrder => Error.Validation(
            code: "Recipe.IngredientsOutOfOrder",
            description: "Ingredients should be supplied with order indices starting with 1 and incrementing by 1. No gaps are allowed. Correct example: 1, 2, 3, 4... "
        );
        public static Error MustHaveIngredients => Error.Validation(
            code: "Recipe.MustHaveIngredients",
            description: "At least 1 ingredient must be provided to save a recipe"
        );
    }

    public static class Ingredient{
        public static Error DescriptionTooLong => Error.Validation(
            code: "Ingredient.DescriptionTooLong",
            description: "Ingredient description exceeds max character length"
        );
        public static Error MissingIngredientAmountUnits => Error.Validation(
            code: "Ingredient.MissingIngredientAmountUnits",
            description: "Ingredient amount units missing"
        );
        public static Error InvalidIngredientAmountUnit => Error.Validation(
            code: "Ingredient.InvalidIngredientAmountUnit",
            description: "Ingredient amount unit provided does not exist"
        );
        public static Error UnitsProvidedWithoutIngredientAmount => Error.Validation(
            code: "Ingredient.UnitsProvidedWithoutIngredientAmount",
            description: "A unit of ingredient measurement was provided without a numeric amount"
        );
        public static Error OrderIndexInvalid => Error.Validation(
            code: "Ingredient.OrderIndexInvalid",
            description: "A positive non-zero number should be provided for each ingredient"
        );
        public static Error UnableToParseInt => Error.Validation(
            code: "Ingredient.UnableToParseInt",
            description: "Unable to parse an int from a provided string value"
        );
    }
}