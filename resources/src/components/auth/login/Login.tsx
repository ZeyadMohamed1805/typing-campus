import styles from "./Login.module.scss";
import { FormDivider, FormFields, FormThirdPartyLinks } from "./Login.blocks";
import { useLogin } from "./Login.hooks";
import { FormProvider } from "react-hook-form";

const Login = () => {
    const loginData = useLogin();

    return (
        <FormProvider {...loginData.formData}>
            <form className={styles.loginForm} onSubmit={loginData.onSubmit}>
                <FormFields />

                <FormDivider />

                <div className={styles.thirdPartySection}>
                    <FormThirdPartyLinks />
                </div>
            </form>
        </FormProvider>
    );
};

export default Login;
