const UserErrors: Record<string, string> = {
    "User.NotFound": "User not found.",
    "User.UsernameExists": "Username already exists.",
    "User.UsernameTooShort": "Username does not meet minimum length requirements!",
    "User.PasswordTooShort": "Password does not meet minimum length requirements!",
    "User.UsernameTooLong": "Username exceeds the maximum length requirements!",
    "User.PasswordTooLong": "Password exceeds the maximum length requirements"
}

export default UserErrors;