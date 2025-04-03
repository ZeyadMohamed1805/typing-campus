import styles from "./Hero.module.scss";
import {
    useHeroAnimatedTypingText,
    useHeroAuthNavigation,
} from "./useHero.hooks";

export const HeroTitle = () => {
    const heroTitleData = useHeroAnimatedTypingText();

    return (
        <h1 className={styles.title}>
            <span>Master Your Keyboard.</span>
            <span className={styles.typingContainer}>
                <span className={styles.typing}>
                    {heroTitleData.displayedText}
                </span>
            </span>
        </h1>
    );
};

export const HeroDescription = () => {
    return (
        <p className={styles.description}>
            Improve your typing speed, challenge yourself with real-time tests,
            and track your progress.
        </p>
    );
};

export const HeroCtaButtons = () => {
    const heroCtaButtonsData = useHeroAuthNavigation();

    return (
        <div className={styles.ctaButtons}>
            <button className={styles.primary}>Start Typing Challenge</button>
            <button
                className={styles.secondary}
                onClick={heroCtaButtonsData.handleAuthNavigation}
            >
                Join Now
            </button>
        </div>
    );
};
