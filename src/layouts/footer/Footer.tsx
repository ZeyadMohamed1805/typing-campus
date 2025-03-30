import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.logo}>Typing Campus</div>

                <nav className={styles.nav}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </nav>
            </div>

            <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Typing Campus. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
