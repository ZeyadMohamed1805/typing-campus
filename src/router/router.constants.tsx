import Auth from "../pages/Auth";
import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";

export const APPLICATION_ROUTES: Array<RouteProps> = [
    { path: "/", Component: Home },
    { path: "/auth/login", Component: Auth },
    { path: "/auth/register", Component: Auth },
];
