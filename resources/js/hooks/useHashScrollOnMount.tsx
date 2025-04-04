import { useEffect } from "react"
import { hashScrollByHref } from "../helpers/hashScroll";
import { usePage } from "@inertiajs/react";

export const useHashScrollOnMount = () => {
    const { url } = usePage();
    
    useEffect(() => {
        hashScrollByHref(url);
    }, [url]);
}