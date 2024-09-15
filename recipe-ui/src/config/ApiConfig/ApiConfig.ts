export interface ApiConfig {
    apiUrl: string;
    timeout: number;
    delay: number;
    getEndpointURL: (endpoint: string) => string;
}