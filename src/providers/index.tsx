import { TChildrenProps } from "../types";
import LayoutProvider from "./layout/Layout.provider";
import RouterProvider from "./router/Router.provider";

const Provider = ({ children }: TChildrenProps) => {
    return (
        <RouterProvider>
            <LayoutProvider>{children}</LayoutProvider>
        </RouterProvider>
    );
};

export default Provider;
