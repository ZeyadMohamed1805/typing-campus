import { router } from "@inertiajs/react";
import { useCallback } from "react";

export const useActionsCtaButtonNavigation = () => {
    const handleAuthNavigation = useCallback(() => {
        router.visit("/auth/register");
    }, []);

    return { handleAuthNavigation };
};
