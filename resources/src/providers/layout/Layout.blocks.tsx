import { usePage } from "@inertiajs/react";
import { JSX } from "react";
import { TChildrenProps } from "../../types";

const DashboardLayout = ({ children }: TChildrenProps) => {
    return (
        <div>
            DashboardLayout
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
            ActiveLayout = () => <></>;
    }

    return (
        <ActiveLayout>
            {children}
        </ActiveLayout>
    );
}