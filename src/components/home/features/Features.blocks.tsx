import { FEATURES } from "./Features.constants";
import styles from "./Features.module.scss";

export const FeaturesHeader = () => {
    return <h2 className={styles.title}>Why Choose Our Typing Platform?</h2>;
};

const FeatureCards = () => {
    return FEATURES.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
            <span className={styles.icon}>{feature.icon}</span>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
        </div>
    ));
};

export const FeaturesCardsGrid = () => {
    return (
        <div className={styles.featuresGrid}>
            <FeatureCards />
        </div>
    );
};
