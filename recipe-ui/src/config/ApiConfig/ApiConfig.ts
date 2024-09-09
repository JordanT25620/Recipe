export interface ApiConfig {
    apiUrl: string;
    timeout: number;
    getEndpointURL: (endpoint: string) => string;
}