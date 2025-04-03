import { StatisticsCardsGrid, StatisticsHeader } from "./Statistics.blocks";
import styles from "./Statistics.module.scss";

const Statistics = () => {
    return (
        <section id="statistics" className={styles.statisticsSection}>
            <StatisticsHeader />
            <StatisticsCardsGrid />
        </section>
    );
};

export default Statistics;
