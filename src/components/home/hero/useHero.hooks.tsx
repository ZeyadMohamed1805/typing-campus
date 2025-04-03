import { useCallback, useEffect, useState } from "react";
import { TYPING_TEXTS } from "./Hero.constants";
import { useNavigate } from "react-router-dom";

export const useHeroAnimatedTypingText = () => {
    const [activeTypingTextIndex, setActiveTypingTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = isDeleting ? 50 : 100;

    useEffect(() => {
        const text = TYPING_TEXTS[activeTypingTextIndex];
        let timer: NodeJS.Timeout;

        if (!isDeleting && displayedText === text) {
            timer = setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setActiveTypingTextIndex((previousActiveTypingTextIndex) => {
                const newActiveTypingTextIndex =
                    (previousActiveTypingTextIndex + 1) % TYPING_TEXTS.length;
                return newActiveTypingTextIndex;
            });
        } else {
            timer = setTimeout(() => {
                setDisplayedText((prev) =>
                    isDeleting
                        ? text.substring(0, prev.length - 1)
                        : text.substring(0, prev.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, activeTypingTextIndex, speed]);

    return { displayedText };
};

export const useHeroAuthNavigation = () => {
    const navigate = useNavigate();

    const handleAuthNavigation = useCallback(() => {
        navigate("/auth");
    }, [navigate]);

    return { handleAuthNavigation };
};
