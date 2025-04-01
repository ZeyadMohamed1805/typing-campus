import { MouseEvent } from "react";
import { extractElementIdFromHashHref } from "../helpers/extractElementIdFromHashHref";

const hashScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    const hashHref = event.currentTarget.getAttribute("href");

    if (hashHref) {
        const elementId = extractElementIdFromHashHref(hashHref);

        if (elementId) {
            const targetElement = document.getElementById(elementId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
};

export default hashScroll;
