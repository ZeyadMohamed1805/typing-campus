import styles from "./Header.module.scss";
import { HEADER_BUTTONS, HEADER_LINKS } from "./Header.constants";
import {
    THeaderMenuIconProps,
    THeaderNavigationProps,
    THeaderOverlayProps,
} from "./Header.types";
import { Link } from "react-router-dom";
import { hashScrollByEvent } from "../../helpers/hashScroll";

export const HeaderLogo = () => {
    return <div className={styles.logo}>Typing Campus</div>;
};

const HeaderLinks = () => {
    return HEADER_LINKS.map((headerLink) => {
        return (
            <li key={headerLink.key} className={styles.navLink}>
                <Link to={headerLink.path} onClick={hashScrollByEvent}>
                    {headerLink.title}
                </Link>
            </li>
        );
    });
};

const HeaderButtons = () => {
    return HEADER_BUTTONS.map((headerButton) => {
        return (
            <li key={headerButton.key} className={styles.navButton}>
                <Link to={headerButton.path}>{headerButton.title}</Link>
            </li>
        );
    });
};

export const HeaderNavigation = ({ props }: THeaderNavigationProps) => {
    return (
        <nav className={props.className}>
            <ul>
                <HeaderLinks />
                <HeaderButtons />
            </ul>
        </nav>
    );
};

export const HeaderMenuIcon = ({ props }: THeaderMenuIconProps) => {
    return (
        <div className={styles.menuIcon} onClick={props.onClick}>
            <span />
            <span />
            <span />
        </div>
    );
};

export const HeaderOverlay = ({ props }: THeaderOverlayProps) => {
    if (!props.condition) {
        return null;
    }

    return <div className={styles.overlay} onClick={props.onClick} />;
};
