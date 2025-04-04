import styles from "./Input.module.scss";
import { TInputProps } from "./Input.types";

const Input = ({ props }: TInputProps) => {
    return (
        <div className={styles.inputGroup}>
            <input {...props} />
        </div>
    );
};

export default Input;
