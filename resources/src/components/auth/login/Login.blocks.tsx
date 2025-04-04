import Input from "../../shared/input/Input";
import { THIRD_PARTY_BUTTONS } from "./Login.constants";
import styles from "./Login.module.scss";
import { TFormThirdPartyButtonProps } from "./Login.types";

export const FormFields = () => {
    return (
        <div className={styles.formFields}>
            <Input
                props={{ type: "email", placeholder: "Email", required: true }}
            />
            <Input
                props={{
                    type: "password",
                    placeholder: "Password",
                    required: true,
                }}
            />
            <button type="submit" className={styles.submitButton}>
                Submit
            </button>
        </div>
    );
};

export const FormDivider = () => {
    return <div className={styles.divider}>or</div>;
};

const FormThirdPartyButton = ({ props }: TFormThirdPartyButtonProps) => {
    return (
        <button type="button" className={styles.thirdPartyButton}>
            <img src={props.icon} alt="Google Logo" />
            {props.title}
        </button>
    );
};

export const FormThirdPartyButtons = () => {
    return THIRD_PARTY_BUTTONS.map((button, index) => (
        <FormThirdPartyButton key={index} props={button} />
    ));
};
