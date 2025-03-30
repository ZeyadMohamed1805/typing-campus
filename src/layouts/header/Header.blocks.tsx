import { HEADER_LINKS } from "./Header.constants";
import { THeaderLogoProps, THeaderMenuIconProps, THeaderNavigationProps, THeaderOverlayProps } from "./Header.types";

export const HeaderLogo = (headerLogoProps: THeaderLogoProps) => {
    return (
        <div className={headerLogoProps.className}>
            Typing Campus
        </div>
    )
}

const HeaderLinks = HEADER_LINKS.map((headerLink) => {
    return (
        <li key={headerLink.key}>
            <a href={headerLink.path}>
                {headerLink.title}
            </a>
        </li>
    )
});

export const HeaderNavigation = (headerNavigationProps: THeaderNavigationProps) => {
    return (
        <nav className={headerNavigationProps.className}>
            <ul>
                {HeaderLinks}
            </ul>
        </nav>
    )
}

export const HeaderMenuIcon = (headerMenuIconProps: THeaderMenuIconProps) => {
    return (
        <div
            className={headerMenuIconProps.className}
            onClick={headerMenuIconProps.onClick}
        >
            <span />
            <span />
            <span />
        </div>
    )
}

export const HeaderOverlay = (headerOverlayProps: THeaderOverlayProps) => {
    if (!headerOverlayProps.condition) {
        return null;
    }

    return (
        <div
            className={headerOverlayProps.className}
            onClick={headerOverlayProps.onClick}
        />
    )
}