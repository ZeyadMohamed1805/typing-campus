import {
    TStatisticCardProps,
    TStatisticCardCircleProps,
    TStatisticCardContentProps,
    TStatisticCardLabelProps,
} from "./Statistics.types";
import { useStatisticCard } from "./useStatistics.hooks";
import styles from "./Statistics.module.scss";
import { STATISTICS } from "./Statistics.constants";

const StatisticCardCircle = ({ props }: TStatisticCardCircleProps) => {
    return (
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className={styles.background} />
            <circle
                cx="50"
                cy="50"
                r="45"
                className={styles.progress}
                data-count={props.count}
                data-is-visible={props.isScrolledIntoView}
            />
        </svg>
    );
};

const StatisticCardContent = ({ props }: TStatisticCardContentProps) => {
    return (
        <div className={styles.statisticCardContent}>
            <span className={styles.statisticCardIcon}>{props.icon}</span>
            <span className={styles.statisticCardNumber}>{props.count}</span>
        </div>
    );
};

const StatisticCardLabel = ({ props }: TStatisticCardLabelProps) => {
    return <p className={styles.statisticCardLabel}>{props.label}</p>;
};

const StatisticCard = ({ props }: TStatisticCardProps) => {
    const statisticCardData = useStatisticCard({
        props: {
            count: props.count,
        },
    });

    return (
        <div
            ref={statisticCardData.statisticCardRef}
            className={styles.statisticCard}
        >
            <div className={styles.progressCircle}>
                <StatisticCardCircle
                    props={{
                        count: statisticCardData.count,
                        isScrolledIntoView:
                            statisticCardData.isScrolledIntoView,
                    }}
                />

                <StatisticCardContent
                    props={{
                        icon: props.icon,
                        count: statisticCardData.count,
                    }}
                />
            </div>
            <StatisticCardLabel props={props} />
        </div>
    );
};

export const StatisticCards = STATISTICS.map((statistic, index) => (
    <StatisticCard key={index} props={statistic} />
));
