import { TLayoutProps } from "../types";
import LayoutProvider from "./layout.provider";

const Provider = ({ children }: TLayoutProps) => {
    return <LayoutProvider>{children}</LayoutProvider>;
};

export default Provider;
