import { StatisticCards } from "./Statistics.blocks";
import styles from "./Statistics.module.scss";

const Statistics = () => {
    return (
        <section className={styles.statisticsSection}>
            <h2 className={styles.title}>Platform Statistics</h2>
            <div className={styles.statisticsGrid}>{StatisticCards}</div>
        </section>
    );
};

export default Statistics;
