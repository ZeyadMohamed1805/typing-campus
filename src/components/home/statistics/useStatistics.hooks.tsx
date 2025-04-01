import { useEffect, useRef, useState } from "react";
import {
    TUseStatisticCardProps,
    TUseStatisticCardCountProps,
} from "./Statistics.types";

const useStatisticCardCount = (
    useStatisticCardCountProps: TUseStatisticCardCountProps
) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (useStatisticCardCountProps.isScrolledIntoView) {
            let start = 0;
            const increment = Math.ceil(useStatisticCardCountProps.count / 50);
            const interval = setInterval(() => {
                start += increment;
                if (start >= useStatisticCardCountProps.count) {
                    start = useStatisticCardCountProps.count;
                    clearInterval(interval);
                }
                setCount(start);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [
        useStatisticCardCountProps.count,
        useStatisticCardCountProps.isScrolledIntoView,
    ]);

    return { count };
};

const useStatisticCardScrollIntoView = () => {
    const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
    const statisticCardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsScrolledIntoView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (statisticCardRef.current) {
            observer.observe(statisticCardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return { isScrolledIntoView, statisticCardRef };
};

export const useStatisticCard = (
    useStatisticCardsProps: TUseStatisticCardProps
) => {
    const { isScrolledIntoView, statisticCardRef } =
        useStatisticCardScrollIntoView();
    const { count } = useStatisticCardCount({
        count: useStatisticCardsProps.count,
        isScrolledIntoView,
    });

    return { count, isScrolledIntoView, statisticCardRef };
};
