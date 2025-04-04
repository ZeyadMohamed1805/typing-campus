import { removeTrailingSlashAndHashFromPathname } from "./regex";

export const extractElementIdFromHashHref = (hashHref: string) => {
    if (hashHref) {
        const elementId = removeTrailingSlashAndHashFromPathname(hashHref);

        return elementId;
    }
};
