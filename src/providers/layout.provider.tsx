import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import { TLayoutProps } from "../types";

const LayoutProvider = ({ children }: TLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default LayoutProvider;
