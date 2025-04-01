import styles from "./Header.module.scss";
import { HEADER_LINKS } from "./Header.constants";
import {
    THeaderMenuIconProps,
    THeaderNavigationProps,
    THeaderOverlayProps,
} from "./Header.types";
import { Link } from "react-router-dom";
import hashScroll from "../../events/hashScroll";

export const HeaderLogo = () => {
    return <div className={styles.logo}>Typing Campus</div>;
};

const HeaderLinks = HEADER_LINKS.map((headerLink) => {
    return (
        <li key={headerLink.key} className={styles[headerLink.className]}>
            <Link to={headerLink.path} onClick={hashScroll}>
                {headerLink.title}
            </Link>
        </li>
    );
});

export const HeaderNavigation = ({ props }: THeaderNavigationProps) => {
    return (
        <nav className={props.className}>
            <ul>{HeaderLinks}</ul>
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
