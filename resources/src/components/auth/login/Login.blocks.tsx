import Input from "../../shared/input/Input";
import { FORM_INPUT_FIELDS, THIRD_PARTY_LINKS } from "./Login.constants";
import styles from "./Login.module.scss";
import { TFormThirdPartyLinkProps } from "./Login.types";

const FormInputFields = () => {
    return FORM_INPUT_FIELDS.map((field, index) => (
        <Input key={index} props={field} />
    ));
};

const FormSubmitButtonField = () => {
    return (
        <button type="submit" className={styles.submitButton}>
            Submit
        </button>
    );
};

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

const FormThirdPartyLink = ({ props }: TFormThirdPartyLinkProps) => {
    return (
        <a className={styles.thirdPartyLink} href={props.path}>
            <img src={props.icon} alt="Google Logo" />
            {props.title}
        </a>
    );
};

export const FormThirdPartyLinks = () => {
    return THIRD_PARTY_LINKS.map((link, index) => (
        <FormThirdPartyLink key={index} props={link} />
    ));
};
