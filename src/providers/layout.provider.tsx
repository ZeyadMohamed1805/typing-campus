import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import { TChildrenProps } from "../types";

const LayoutProvider = ({ children }: TChildrenProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default LayoutProvider;
