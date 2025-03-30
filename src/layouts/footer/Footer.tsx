import styles from "./Footer.module.scss";
import { FooterCopyright, FooterLogo, FooterNavigation } from "./Footer.blocks";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topRow}>
                <FooterLogo className={styles.logo} />

                <FooterNavigation className={styles.nav} />
            </div>

            <FooterCopyright className={styles.copyright} />
        </footer>
    );
};

export default Footer;
