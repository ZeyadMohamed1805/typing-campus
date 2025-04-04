import { FormFields } from "./Register.blocks";
import styles from "./Register.module.scss";

const Register = () => {
    return (
        <form className={styles.registerForm}>
            <FormFields />
        </form>
    );
};

export default Register;
