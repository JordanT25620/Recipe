import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};

export default useAuthContext;