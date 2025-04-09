import { EToastVariants } from "./Toast.enums";
import { TToastState } from "./Toast.types";

export const TOAST_HIDE_TIMEOUT = 500;

export const TOAST_INITIAL_STATE: TToastState = {
    message: "Something went wrong",
    isDisplayed: false,
    isHiding: false,
    variant: EToastVariants.ERROR,
};