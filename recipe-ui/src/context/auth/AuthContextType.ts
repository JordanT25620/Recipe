import User from "../../models/response-models/User";

export default interface AuthContextType {
    user: User | null;
    login: (user: User, token: string) => void;
    logout: () => void;
}