import Toast from "../../components/shared/toast/Toast";
import Loading from "../../pages/Loading";
import { TChildrenProps } from "../../types";
import { ActiveLayout } from "./Layout.blocks";

const Layout = ({ children }: TChildrenProps) => {
    return (
        <>
            <Loading />
            <Toast />
            <ActiveLayout>
                {children}
            </ActiveLayout>
        </>
    );
};

export default Layout;
