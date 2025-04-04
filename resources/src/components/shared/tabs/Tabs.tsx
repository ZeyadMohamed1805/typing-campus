import { useMemo, useState } from "react";
import styles from "./Tabs.module.scss";
import { TTabsProps } from "./Tabs.types";

const Tabs = ({ props }: TTabsProps) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const ActiveTabPanel = useMemo(
        () => props.tabs[activeTabIndex].TabPanel,
        [activeTabIndex, props.tabs]
    );

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabHeaders}>
                {props.tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tabButton} ${activeTabIndex === index ? styles.active : ""}`}
                        onClick={() => setActiveTabIndex(index)}
                    >
                        {tab.header}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                <ActiveTabPanel />
            </div>
        </div>
    );
};

export default Tabs;
