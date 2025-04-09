import { EToastActionTypes } from "./Toast.enums";

type ToastVariant = "success" | "error" | "warning";

export type TToastMessageProps = {
    props: {
        message: string;
    };
};

export type TToastCloseButtonProps = {
    props: {
        handleClose: () => void;
    };
};

export type TToastState = {
    message: string;
    isDisplayed: boolean;
    isHiding: boolean;
    variant: ToastVariant;
};

export type TToastAction =
    | { type: EToastActionTypes.SHOW; payload: { message: string; variant: ToastVariant } }
    | { type: EToastActionTypes.HIDE }
    | { type: EToastActionTypes.RESET };