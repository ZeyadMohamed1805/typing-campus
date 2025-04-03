import { useState } from "react";
import styles from "./Tabs.module.scss";
import { TTabsProps } from "./Tabs.types";

const Tabs = ({ props, children }: TTabsProps) => {
    const [activeTab, setActiveTab] = useState(props.tabs[0].value);

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabHeaders}>
                {props.tabs.map((tab) => (
                    <button
                        key={tab.value}
                        className={`${styles.tabButton} ${activeTab === tab.value ? styles.active : ""}`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>{children}</div>
        </div>
    );
};

export default Tabs;
