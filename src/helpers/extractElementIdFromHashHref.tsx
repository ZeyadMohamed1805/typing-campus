export const extractElementIdFromHashHref = (hashHref: string) => {
    if (hashHref) {
        const elementId = hashHref.slice(1);

        return elementId;
    }
};
