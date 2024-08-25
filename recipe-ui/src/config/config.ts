import { Config } from './configTypes';

const config: Config = {
  api: {
    apiUrl: 'http://localhost:5072',
    timeout: 5000,
  },
  theme: {
    primaryColor: '#3498db',
    secondaryColor: '#2ecc71',
    backgroundColor: '#ecf0f1',
  },
  formatting: {
    dateFormat: 'YYYY-MM-DD',
    numberFormat: '0,0.00',
  },
};

export default config;
