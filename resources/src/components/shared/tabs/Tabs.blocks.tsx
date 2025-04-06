import { Link } from "@inertiajs/react";
import { TActiveTabPanel, TTabHeadersProps } from "./Tabs.types";
import styles from "./Tabs.module.scss";
import { useMemo } from "react";

export const TabHeaders = ({ props }: TTabHeadersProps) => {
    return props.tabs.map((tab, index) => (
        <Link
            key={index}
            className={`${styles.tabLink} ${props.activeTabIndex === index ? styles.active : ""}`}
            href={tab.path}
            onClick={() => props.setActiveTabIndex(index)}
            preserveState
            replace
        >
            {tab.header}
        </Link>
    ));
};

export const ActiveTabPanel = ({ props }: TActiveTabPanel) => {
    const TabPanel = useMemo(() => {
        return props.tabs[props.activeTabIndex].TabPanel;
    }, [props.activeTabIndex, props.tabs]);

    return <TabPanel />;
};
