import Login from "../login/Login";
import Register from "../register/Register";

export const FORM_TABS = [
    {
        header: "Login",
        path: "/auth/login",
        TabPanel: Login,
    },
    {
        header: "Register",
        path: "/auth/register",
        TabPanel: Register,
    },
];
