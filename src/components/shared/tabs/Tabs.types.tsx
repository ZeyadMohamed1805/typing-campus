import { ReactNode } from "react";

export type TTabsProps = {
    props: {
        tabs: Array<{
            label: string;
            value: string;
        }>;
    };
    children: ReactNode;
};
