import styles from "./Hero.module.scss";
import useHero from "./useHero.hooks";

const Hero = () => {
    const heroData = useHero();

    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                <span>Master Your Keyboard.</span>
                <span className={styles.typingContainer}>
                    <span className={styles.typing}>
                        {heroData.displayedText}
                    </span>
                </span>
            </h1>
            <p className={styles.description}>
                Improve your typing speed, challenge yourself with real-time
                tests, and track your progress.
            </p>
            <div className={styles.ctaButtons}>
                <button className={styles.primary}>
                    Start Typing Challenge
                </button>
                <button className={styles.secondary}>Join Now</button>
            </div>
        </section>
    );
};

export default Hero;
