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
];

export const THIRD_PARTY_LINKS = [
    {
        icon: googleIcon,
        title: "Continue with Google",
        path: "/auth/third-party/google",
    },
    {
        icon: linkedinIcon,
        title: "Continue with LinkedIn",
        path: "/auth/third-party/linkedin",
    },
];
