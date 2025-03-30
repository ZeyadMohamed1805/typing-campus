import { useCallback, useState } from "react";

const useHeader = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbarState = useCallback(() => {
        setIsNavbarOpen((previousIsNavbarOpenValue) => {
            return !previousIsNavbarOpenValue;
        });
    }, []);

    return { isNavbarOpen, toggleNavbarState };
};

export default useHeader;
