import AllErrors from "./AllErrors";

const getErrorMessage = (errorType: string): string => {
    return AllErrors[errorType] || AllErrors["Default"];
};

export default getErrorMessage;