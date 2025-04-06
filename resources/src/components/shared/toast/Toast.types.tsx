export type ToastVariant = "success" | "error" | "warning";

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
