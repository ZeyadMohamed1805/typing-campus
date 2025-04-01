import styles from "./Footer.module.scss";
import { CURRENT_YEAR, FOOTER_LINKS } from "./Footer.constants";

export const FooterLogo = () => {
    return <div className={styles.logo}>Typing Campus</div>;
};

const FooterLinks = FOOTER_LINKS.map((footerLink) => {
    return (
        <a key={footerLink.key} href={footerLink.href}>
            {footerLink.title}
        </a>
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
