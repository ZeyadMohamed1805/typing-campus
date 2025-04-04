import Login from "../login/Login";
import Register from "../register/Register";

export const FORM_TABS = [
    {
        header: "Login",
        TabPanel: Login,
    },
    {
        header: "Register",
        TabPanel: Register,
    },
];