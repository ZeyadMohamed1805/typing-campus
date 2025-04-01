export const extractElementIdFromHashHref = (hashHref: string) => {
    if (hashHref) {
        const elementId = hashHref.slice(2);

        return elementId;
    }
};
