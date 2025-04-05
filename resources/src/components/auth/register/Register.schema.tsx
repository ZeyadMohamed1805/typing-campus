import * as yup from "yup";

const RegisterSchema = yup.object({
    first_name: yup
        .string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters long"),
    last_name: yup
        .string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters long"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
});

export default RegisterSchema;
