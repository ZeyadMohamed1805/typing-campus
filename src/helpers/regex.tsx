export const removeTrailingSlashAndHashFromPathname = (pathname: string) => {
    return pathname.replace(/^\/+|\/+$|#/g, "");;
}