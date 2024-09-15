import { ReactNode, useState } from "react";
import User from "../../models/response-models/User";
import AuthContext from "./AuthContext";

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (user: User, token: string) => {
        document.cookie = `jwt=${token}; Secure; HttpOnly; SameSite=Strict;`;
        setUser(user);
    };

    const logout = () => {
        document.cookie = 'jwt=; Max-Age=0;';
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;