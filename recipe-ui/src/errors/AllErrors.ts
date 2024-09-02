import AuthErrors from "./AuthErrors";
import IngredientErrors from "./IngredientErrors";
import RecipeErrors from "./RecipeErrors";
import UserErrors from "./UserErrors";

const AllErrors: Record<string, string> = {
    ...UserErrors,
    ...AuthErrors,
    ...RecipeErrors,
    ...IngredientErrors,
    "Default": "An unexpected error occurred."
};

export default AllErrors;