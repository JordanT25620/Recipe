import { useCallback, useState } from "react";
import ApiError from "../utils/error-handling/ApiError";
import FormModel from "../models/form-models/FormModel";
import config from "../config/Config";

interface ApiCallState<T> {
    isLoading: boolean;
    result: T | ApiError | null;
}

const useApiCall = <FormModel_T extends FormModel, Response_T extends Response | null>(
    apiCall: (formData: FormModel_T) => Promise<Response_T | ApiError>
) => {
    const [state, setState] = useState<ApiCallState<Response_T>>({
      isLoading: false,
      result: null
    });
  
    const execute = useCallback(async (formData: FormModel_T) => {
        setState({ isLoading: true, result: null });
        await new Promise((resolve)=>setTimeout(resolve, config.api.delay));
        const response = await apiCall(formData);
        setState({ isLoading: false, result: response });
    }, [apiCall]);
  
    return { ...state, execute };
};
  
export default useApiCall;