import config from '../config/Config';
import LoginRequest from '../models/request-models/LoginRequest';
import LoginFormModel from '../models/form-models/LoginFormModel';
import AuthResponse from '../models/response-models/AuthResponse';
import axios from 'axios';
import getErrorInfo from '../utils/error-handling/getErrorInfo';
import ApiError from '../utils/error-handling/ApiError';

const endpoint : string = 'auth';

export const authenticateUser = async (formData: LoginFormModel) : Promise<AuthResponse | ApiError> => {

  const requestData : LoginRequest = {
    Username: formData.username,
    Password: formData.password
  }

  try {
    const { data } = await axios.post<AuthResponse>(config.api.getEndpointURL(endpoint), requestData);
    return new AuthResponse(data.token, data.user);
  } catch (error) {
    return getErrorInfo(error);
  }
}