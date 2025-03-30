import React from "react";
import styles from "./Header.module.scss";
import useHeader from "./useHeader";
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
            <HeaderLogo className={styles.logo} />

            <HeaderMenuIcon
                className={styles.menuIcon}
                onClick={headerData.toggleNavbarState}
            />

            <HeaderNavigation
                className={`${styles.nav} ${headerData.isNavbarOpen ? styles.open : ""}`}
            />

            <HeaderOverlay
                condition={headerData.isNavbarOpen}
                className={styles.overlay}
                onClick={headerData.toggleNavbarState}
            />
        </header>
    );
};

export default Header;
