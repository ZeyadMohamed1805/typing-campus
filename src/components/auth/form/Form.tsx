import Tabs from "../../shared/tabs/Tabs";
import styles from "./Form.module.scss";

const Form = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContainer}>
                <Tabs
                    props={{
                        tabs: [
                            { label: "Login", value: "login" },
                            { label: "Register", value: "register" },
                        ],
                    }}
                >
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                name="firstName"
                                required
                            />
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                name="lastName"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                name="email"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                name="password"
                                required
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </Tabs>
            </div>
        </div>
    );
};

export default Form;
