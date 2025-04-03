import { BrowserRouter } from "react-router-dom";
import { TChildrenProps } from "../../types";

const RouterProvider = ({ children }: TChildrenProps) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterProvider;
