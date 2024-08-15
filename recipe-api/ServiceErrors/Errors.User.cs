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
}