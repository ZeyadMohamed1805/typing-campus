import { FeaturesCardsGrid, FeaturesHeader } from "./Features.blocks";
import styles from "./Features.module.scss";

const Features = () => {
    return (
        <section id="features" className={styles.features}>
            <FeaturesHeader />
            <FeaturesCardsGrid />
        </section>
    );
};

export default Features;
