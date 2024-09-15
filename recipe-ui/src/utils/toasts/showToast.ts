import { Bounce, toast, ToastOptions } from "react-toastify";
import config from "../../config/Config";

export const showToast = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const options : ToastOptions = {
        position: "top-center",
        autoClose: config.toastSettings.lifespanInMs,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce
    };
    
    switch (type) {
        case 'success':
            toast.success(message, options);
            break;
        case 'error':
            toast.error(message, options);
            break;
        default:
            toast.info(message, options);
    }
};