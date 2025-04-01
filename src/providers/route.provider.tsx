import { BrowserRouter } from "react-router-dom";
import { TChildrenProps } from "../types";

const RouteProvider = ({ children }: TChildrenProps) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouteProvider;
