import { router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { ToastVariant } from "./Toast.types";

export const useToast = () => {
    const [message, setMessage] = useState("Something went wrong");
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isHiding, setIsHiding] = useState(false);
    const [variant, setVariant] = useState<ToastVariant>("error");

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isListenerAttached = useRef(false);

    useEffect(() => {
        if (!isListenerAttached.current) {
            isListenerAttached.current = true;

            router.on("error", (event) => {
                const errorMessage =
                    Object.values(event.detail?.errors)?.[0] ||
                    "Something went wrong";

                setMessage(errorMessage);
                setVariant("error");
                setIsDisplayed(true);
                setIsHiding(false);

                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                if (hideTimeoutRef.current)
                    clearTimeout(hideTimeoutRef.current);

                timeoutRef.current = setTimeout(() => handleClose(), 5000);
            });
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };
    }, []);

    const handleClose = () => {
        setIsHiding(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        hideTimeoutRef.current = setTimeout(() => {
            setIsDisplayed(false);
            setIsHiding(false);
        }, 400);
    };

    return { message, isDisplayed, isHiding, variant, handleClose };
};
