import styles from "./Footer.module.scss";
import { FooterCopyright, FooterLogo, FooterNavigation } from "./Footer.blocks";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topRow}>
                <FooterLogo />

                <FooterNavigation />
            </div>

            <FooterCopyright />
        </footer>
    );
};

export default Footer;
