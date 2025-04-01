import Login from "../pages/Login";
import Register from "../pages/Register";
import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";

export const APPLICATION_ROUTES: Array<RouteProps> = [
    { path: "/", Component: Home },
    { path: "/auth/register", Component: Register },
    { path: "/auth/login", Component: Login },
];
