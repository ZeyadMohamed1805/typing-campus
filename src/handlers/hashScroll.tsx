import { extractElementIdFromHashHref } from "../helpers/extractElementIdFromHashHref";

const hashScroll = (hashHref: string) => {
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
        }
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

export default hashScroll;
