import { Route } from "react-router-dom";
import { APPLICATION_ROUTES } from "./router.constants";

export const ApplicationRoutes = APPLICATION_ROUTES.map((route, index) => {
    return <Route key={index} {...route} />;
});
