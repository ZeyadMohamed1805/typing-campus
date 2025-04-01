import { TChildrenProps } from "../types";
import LayoutProvider from "./layout.provider";
import RouteProvider from "./route.provider";

const Provider = ({ children }: TChildrenProps) => {
    return (
        <RouteProvider>
            <LayoutProvider>{children}</LayoutProvider>
        </RouteProvider>
    );
};

export default Provider;
