import CreateAccountFormModel from '../models/form-models/CreateAccountFormModel';
import config from '../config/Config';
import CreateAccountRequest from '../models/request-models/CreateAccountRequest';
import axios from 'axios';
import ApiError from '../utils/error-handling/ApiError';
import getErrorInfo from '../utils/error-handling/getErrorInfo';

const endpoint : string = 'users';

export const registerUser = async (formData: CreateAccountFormModel) : Promise<null | ApiError> => {

    const requestData : CreateAccountRequest = {
        Username: formData.username,
        Password: formData.password
    }

    try {
        await axios.post(config.api.getEndpointURL(endpoint), requestData);
        return null;
    } catch (error) {
        return getErrorInfo(error);
    }
};