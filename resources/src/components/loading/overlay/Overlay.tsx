import { TChildrenProps } from "../../../types";
import styles from "./Overlay.module.scss";

const Overlay = ({ children }: TChildrenProps) => {
    return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
