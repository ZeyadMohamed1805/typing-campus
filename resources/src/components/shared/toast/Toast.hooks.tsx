import { usePage } from "@inertiajs/react";
import { useEffect, useReducer, useRef } from "react";
import { TOAST_HIDE_TIMEOUT, TOAST_INITIAL_STATE } from "./Toast.constants";
import { toastReducer } from "./Toast.reducer";
import { EToastActionTypes, EToastVariants } from "./Toast.enums";

export const useToast = () => {
    const [toastState, dispatchToast] = useReducer(toastReducer, TOAST_INITIAL_STATE);
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { props } = usePage();

    useEffect(() => {
        const errorMessage = Object.values(props.errors)[0];

        if (errorMessage) {
            dispatchToast({
                type: EToastActionTypes.SHOW,
                payload: {
                    message: errorMessage,
                    variant: EToastVariants.ERROR,
                },
            });
        }

        return () => {
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, [props.errors]);

    const handleClose = () => {
        dispatchToast({ type: EToastActionTypes.HIDE });

        hideTimeoutRef.current = setTimeout(() => {
            dispatchToast({ type: EToastActionTypes.RESET });
        }, TOAST_HIDE_TIMEOUT);
    };

    return { ...toastState, handleClose };
};