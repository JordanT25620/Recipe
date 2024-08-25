export interface Config {
    api: ApiConfig;
    theme: ThemeConfig;
    formatting: FormattingConfig;
}

export interface ApiConfig {
    apiUrl: string;
    timeout: number;
}
  
export interface ThemeConfig {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
}

export interface FormattingConfig {
    dateFormat: string;
    numberFormat: string;
}
  