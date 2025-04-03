import { extractElementIdFromHashHref } from "./extractElementIdFromHashHref";

export const hashScrollByHref = (hashHref: string | null) => {
    if (hashHref) {
        const elementId = extractElementIdFromHashHref(hashHref);
        console.log(elementId);
        
        if (elementId) {
            const targetElement = document.getElementById(elementId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            return;
        }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

export const hashScrollByEvent = (event: React.MouseEvent<HTMLElement>) => {
    const href = event.currentTarget.getAttribute("href");
    console.log(href);
    
    hashScrollByHref(href);
}
