import { useEffect, useRef, useState } from "react";
import {
    TUseStatisticCardProps,
    TUseStatisticCardCountProps,
} from "./Statistics.types";

const useStatisticCardCount = ({ props }: TUseStatisticCardCountProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.isScrolledIntoView) {
            let start = 0;
            const increment = Math.ceil(props.count / 50);
            const interval = setInterval(() => {
                start += increment;
                if (start >= props.count) {
                    start = props.count;
                    clearInterval(interval);
                }
                setCount(start);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [props.count, props.isScrolledIntoView]);

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

export const useStatisticCard = ({ props }: TUseStatisticCardProps) => {
    const { isScrolledIntoView, statisticCardRef } =
        useStatisticCardScrollIntoView();
    const { count } = useStatisticCardCount({
        props: {
            count: props.count,
            isScrolledIntoView,
        },
    });

    return { count, isScrolledIntoView, statisticCardRef };
};
