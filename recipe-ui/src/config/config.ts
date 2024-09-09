import { ApiConfig } from "./ApiConfig/ApiConfig";
import { FieldRequirementsConfig } from "./FieldRequirementsConfig/FieldRequirementsConfig";
import { ToastConfig } from "./ToastConfig/ToastConfig";

export interface Config {
  api: ApiConfig;
  fieldRequirements: FieldRequirementsConfig;
  toastSettings: ToastConfig;
}

const config: Config = {
  api: {
    apiUrl: 'http://localhost:5072/api',
    timeout: 5000,
    getEndpointURL: (endpoint) => `${config.api.apiUrl}/${endpoint}`
  },
  fieldRequirements: {
    username: {
      minLength: 2,
      maxLength: 30
    },
    password: {
      minLength: 7,
      maxLength: 40
    }
  },
  toastSettings: {
    lifespanInMs: 5000
  }
};

export default config;