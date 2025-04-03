import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import { useLocation } from "react-router-dom";
import { TChildrenProps } from "../../types";
import { useHashScrollOnMount } from "./Layout.hooks";

const DefaultLayout = (props: TChildrenProps) => {
    useHashScrollOnMount();
    
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

const AuthLayout = (props: TChildrenProps) => {
    return <>{props.children}</>;
};

export const CurrentLayout = (props: TChildrenProps) => {
    const location = useLocation();
    const isAuthRoute = location.pathname.includes("auth");

    if (isAuthRoute) {
        return <AuthLayout {...props} />;
    }

    return <DefaultLayout {...props} />;
};
