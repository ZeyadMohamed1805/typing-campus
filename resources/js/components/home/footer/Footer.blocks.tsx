import styles from "./Footer.module.scss";
import {
    CURRENT_YEAR,
    FOOTER_HASH_LINKS,
    FOOTER_NAVIGATION_LINKS,
} from "./Footer.constants";
import { Link } from "@inertiajs/react";

export const FooterLogo = () => {
    return <div className={styles.logo}>Typing Campus</div>;
};

const FooterHashLinks = () => {
    return FOOTER_HASH_LINKS.map((footerLink) => {
        return (
            <li key={footerLink.key} className={styles.navLink}>
                <Link
                    key={footerLink.key}
                    href={footerLink.href}
                    preserveState={true}
                >
                    {footerLink.title}
                </Link>
            </li>
        );
    });
};

const FooterNavigationLinks = () => {
    return FOOTER_NAVIGATION_LINKS.map((footerLink) => {
        return (
            <li key={footerLink.key} className={styles.navLink}>
                <Link href={footerLink.href}>{footerLink.title}</Link>
            </li>
        );
    });
};

export const FooterNavigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <FooterHashLinks />
            </ul>
            <ul>
                <FooterNavigationLinks />
            </ul>
        </nav>
    );
};

export const FooterCopyright = () => {
    return (
        <p className={styles.copyright}>
            &copy; {CURRENT_YEAR} Typing Campus. All rights reserved.
        </p>
    );
};
