import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useActionsCtaButtonNavigation = () => {
    const navigate = useNavigate();

    const handleAuthNavigation = useCallback(() => {
        navigate("/auth");
    }, [navigate]);

    return { handleAuthNavigation };
}