import { FEATURES } from "./Features.constants";
import styles from "./Features.module.scss";

const Features = () => {
    return (
        <section className={styles.features}>
            <h2 className={styles.title}>Why Choose Our Typing Platform?</h2>
            <div className={styles.featuresGrid}>
                {FEATURES.map((feature, index) => (
                    <div key={index} className={styles.featureCard}>
                        <span className={styles.icon}>{feature.icon}</span>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
