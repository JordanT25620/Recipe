import { isAxiosError } from "axios";
import getErrorMessage from "../../errors/getErrorMessage";
import ApiError from "./ApiError";

const getErrorInfo = (error : unknown) : ApiError => {

    const statusCode : number =  
        (isAxiosError(error) && error.response?.status) 
            ? error.response?.status 
            : 500
    ;
    const message: string = 
        (isAxiosError(error))
            ? getErrorMessage(error.response?.data?.type)
            : 'Failed: Network or other error occurred.'
    ;
    
    return new ApiError(statusCode, message);
}

export default getErrorInfo;