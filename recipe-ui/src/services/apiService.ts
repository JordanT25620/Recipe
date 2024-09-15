import axios from "axios";
import config from "../config/Config";

export const apiClient = axios.create({
    baseURL: config.api.apiUrl,
    timeout: config.api.timeout
  });