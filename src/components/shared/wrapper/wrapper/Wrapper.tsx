import styles from "./Wrapper.module.scss";
import { TWrapperProps } from "./Wrapper.types";

const Wrapper = ({ children }: TWrapperProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContainer}>{children}</div>
        </div>
    );
};

export default Wrapper;
