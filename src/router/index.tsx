import { BrowserRouter, Routes as BrowserRoutes } from "react-router-dom";
import { ApplicationRoutes } from "./router.mappers";

const Router = () => (
    <BrowserRouter>
        <BrowserRoutes>{ApplicationRoutes}</BrowserRoutes>
    </BrowserRouter>
);

export default Router;
