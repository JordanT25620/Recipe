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
        public static Error PasswordLengthRequirement => Error.Validation(
            code: "User.PasswordLengthRequirement",
            description: "Password does not meet minimum length requirements"
        );
    }
}