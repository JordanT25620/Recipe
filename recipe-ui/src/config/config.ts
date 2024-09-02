import { ApiConfig } from "./ApiConfig/ApiConfigType";
import { FieldRequirementsConfig } from "./FieldRequirementsConfig/FieldRequirementsConfig";

export interface Config {
  api: ApiConfig;
  fieldRequirements: FieldRequirementsConfig;
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
  }
};

export default config;