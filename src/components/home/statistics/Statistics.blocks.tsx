import {
    TStatisticCardProps,
    TStatisticCardCircleProps,
    TStatisticCardContentProps,
    TStatisticCardLabelProps,
} from "./Statistics.types";
import { useStatisticCard } from "./useStatistics.hooks";
import styles from "./Statistics.module.scss";
import { STATISTICS } from "./Statistics.constants";

const StatisticCardCircle = (
    statisticCardCircleProps: TStatisticCardCircleProps
) => {
    return (
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className={styles.background} />
            <circle
                cx="50"
                cy="50"
                r="45"
                className={styles.progress}
                data-count={statisticCardCircleProps.count}
                data-is-visible={statisticCardCircleProps.isScrolledIntoView}
            />
        </svg>
    );
};

const StatisticCardContent = (
    statisticCardContentProps: TStatisticCardContentProps
) => {
    return (
        <div className={styles.statisticCardContent}>
            <span className={styles.statisticCardIcon}>
                {statisticCardContentProps.icon}
            </span>
            <span className={styles.statisticCardNumber}>
                {statisticCardContentProps.count}
            </span>
        </div>
    );
};

const StatisticCardLabel = (
    statisticCardLabelProps: TStatisticCardLabelProps
) => {
    return (
        <p className={styles.statisticCardLabel}>
            {statisticCardLabelProps.label}
        </p>
    );
};

const StatisticCard = (statisticCardProps: TStatisticCardProps) => {
    const statisticCardData = useStatisticCard({
        count: statisticCardProps.count,
    });

    return (
        <div
            ref={statisticCardData.statisticCardRef}
            className={styles.statisticCard}
        >
            <div className={styles.progressCircle}>
                <StatisticCardCircle
                    count={statisticCardData.count}
                    isScrolledIntoView={statisticCardData.isScrolledIntoView}
                />

                <StatisticCardContent
                    icon={statisticCardProps.icon}
                    count={statisticCardData.count}
                />
            </div>
            <StatisticCardLabel {...statisticCardProps} />
        </div>
    );
};

export const StatisticCards = STATISTICS.map((statistic, index) => (
    <StatisticCard key={index} {...statistic} />
));
