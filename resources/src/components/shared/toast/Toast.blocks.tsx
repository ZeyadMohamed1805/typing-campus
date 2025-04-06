import styles from "./Toast.module.scss";
import { TToastCloseButtonProps, TToastMessageProps } from "./Toast.types";

export const ToastMessage = ({ props }: TToastMessageProps) => {
    return <span className={styles.message}>{props.message}</span>;
};

export const ToastCloseButton = ({ props }: TToastCloseButtonProps) => {
    return (
        <button
            className={styles.close}
            onClick={props.handleClose}
            aria-label="Close Toast"
        >
            ✕
        </button>
    );
};
