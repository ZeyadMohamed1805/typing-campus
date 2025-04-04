import styles from "./Login.module.scss";
import { FormDivider, FormFields, FormThirdPartyButtons } from "./Login.blocks";

const Login = () => {
    return (
        <form className={styles.loginForm}>
            <FormFields />

            <FormDivider />

            <div className={styles.thirdPartySection}>
                <FormThirdPartyButtons />
            </div>
        </form>
    );
};

export default Login;
