import { usePage } from "@inertiajs/react";
import { JSX } from "react";
import { TChildrenProps } from "../../types";
import Sidebar from "../../layout/sidebar/Sidebar";
import styles from "./Layout.module.scss";

const DashboardLayout = ({ children }: TChildrenProps) => {
    return (
        <div className={styles.dashboardLayout}>
            <Sidebar />
            {children}
        </div>
    );
};

export const ActiveLayout = ({ children }: TChildrenProps) => {
    const { url } = usePage();
    let ActiveLayout: (({ children }: TChildrenProps) => JSX.Element);

    switch (url) {
        case "/dashboard":
            ActiveLayout = DashboardLayout;
            break;
        default:
            ActiveLayout = ({ children }: TChildrenProps) => <>{children}</>;
    }

    return (
        <ActiveLayout>
            {children}
        </ActiveLayout>
    );
}