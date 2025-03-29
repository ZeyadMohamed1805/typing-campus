import React from "react";
import styles from "./header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Typing Campus</div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Courses</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
