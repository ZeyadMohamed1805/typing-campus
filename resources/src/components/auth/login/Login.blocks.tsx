import Input from "../../shared/input/Input";
import { FORM_INPUT_FIELDS, THIRD_PARTY_BUTTONS } from "./Login.constants";
import styles from "./Login.module.scss";
import { TFormThirdPartyButtonProps } from "./Login.types";

const FormInputFields = () => {
    return FORM_INPUT_FIELDS.map((field, index) => (
        <Input key={index} props={field} />
    ));
}

const FormSubmitButtonField = () => {
    return (
        <button type="submit" className={styles.submitButton}>
            Submit
        </button>
    );
}

export const FormFields = () => {
    return (
        <div className={styles.formFields}>
            <FormInputFields />
            <FormSubmitButtonField />
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
