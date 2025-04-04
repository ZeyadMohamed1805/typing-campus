import * as yup from 'yup';

const RegisterSchema = yup.object({
    firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters long'),
    lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters long'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
});

export default RegisterSchema;