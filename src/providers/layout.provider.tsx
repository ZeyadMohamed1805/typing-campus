import Header from "../layouts/header/header.component";
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
