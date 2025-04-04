import { HeroCtaButtons, HeroDescription, HeroTitle } from "./Hero.blocks";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <HeroTitle />
            <HeroDescription />
            <HeroCtaButtons />
        </section>
    );
};

export default Hero;
