import React from "react";
import styles from "./Header.module.scss";
import useHeader from "./useHeader.hooks";
import {
    HeaderLogo,
    HeaderMenuIcon,
    HeaderNavigation,
    HeaderOverlay,
} from "./Header.blocks";

const Header: React.FC = () => {
    const headerData = useHeader();

    return (
        <header className={styles.header}>
            <HeaderLogo />

            <HeaderMenuIcon
                props={{
                    onClick: headerData.toggleNavbarState,
                }}
            />

            <HeaderNavigation
                props={{
                    className: `${styles.nav} ${headerData.isNavbarOpen ? styles.open : ""}`,
                }}
            />

            <HeaderOverlay
                props={{
                    condition: headerData.isNavbarOpen,
                    onClick: headerData.toggleNavbarState,
                }}
            />
        </header>
    );
};

export default Header;
