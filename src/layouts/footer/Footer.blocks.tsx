import styles from "./Footer.module.scss";
import { CURRENT_YEAR, FOOTER_LINKS } from "./Footer.constants";
import { Link } from "react-router-dom";
import hashScroll from "../../events/hashScroll";

export const FooterLogo = () => {
    return <div className={styles.logo}>Typing Campus</div>;
};

const FooterLinks = FOOTER_LINKS.map((footerLink) => {
    return (
        <Link key={footerLink.key} to={footerLink.href} onClick={hashScroll}>
            {footerLink.title}
        </Link>
    );
});

export const FooterNavigation = () => {
    return <nav className={styles.nav}>{FooterLinks}</nav>;
};

export const FooterCopyright = () => {
    return (
        <p className={styles.copyright}>
            &copy; {CURRENT_YEAR} Typing Campus. All rights reserved.
        </p>
    );
};
