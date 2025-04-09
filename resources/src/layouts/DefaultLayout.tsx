import Toast from "../components/shared/toast/Toast";
import Loading from "../pages/Loading";
import { TChildrenProps } from "../types";

const DefaultLayout = ({ children }: TChildrenProps) => {
    return (
        <>
                <Loading />
                <Toast />
                {children}
            </>
    );
};

export default DefaultLayout;
