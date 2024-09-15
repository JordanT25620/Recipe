import { useState } from "react";

export const useToggle = (initialVal : boolean = false) : [boolean, () => void]=> {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(prev => !prev);
    };

    return [ state, toggle ]
}