import Header from "../layouts/header/Header";
import { TLayoutProps } from "../types";

const LayoutProvider = ({ children }: TLayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default LayoutProvider;
