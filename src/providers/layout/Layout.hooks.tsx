import { useEffect } from "react";
import { hashScrollByHref } from "../../helpers/hashScroll";
import { useLocation } from "react-router-dom";

export const useHashScrollOnMount = () => {
    const { hash } = useLocation();

    useEffect(() => {
        hashScrollByHref(hash);
    }, [hash]);
};
