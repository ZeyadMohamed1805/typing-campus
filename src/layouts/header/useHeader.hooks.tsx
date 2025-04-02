import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import hashScroll from "../../handlers/hashScroll";

const useHeader = () => {
    useHashSectionNavigationOnMount();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbarState = useCallback(() => {
        setIsNavbarOpen((previousIsNavbarOpenValue) => {
            return !previousIsNavbarOpenValue;
        });
    }, []);

    return { isNavbarOpen, toggleNavbarState };
};

const useHashSectionNavigationOnMount = () => {
    const { hash } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        hashScroll(hash);
    }, [hash, navigate]);
};

export default useHeader;
