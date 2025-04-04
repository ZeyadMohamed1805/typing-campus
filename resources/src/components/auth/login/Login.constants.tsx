import googleIcon from "../../../../icons/google.svg";
import linkedinIcon from "../../../../icons/linkedin.svg";

export const FORM_INPUT_FIELDS = [
    {
        type: "email",
        name: "email",
        placeholder: "Email",
        required: true,
    },
    {
        type: "password",
        name: "password",
        placeholder: "Password",
        required: true,
    },
    {
        type: "password",
        name: "password_confirmation",
        placeholder: "Confirm Password",
        required: true,
    },
];

export const THIRD_PARTY_BUTTONS = [
    {
        icon: googleIcon,
        title: "Continue with Google",
    },
    {
        icon: linkedinIcon,
        title: "Continue with LinkedIn",
    },
];
