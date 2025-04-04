import { JSX } from "react";

export type TTabsProps = {
    props: {
        tabs: Array<{
            header: string;
            TabPanel: () => JSX.Element;
        }>;
    };
};
