import { CURRENT_YEAR, FOOTER_LINKS } from "./Footer.constants";
import { TFooterCopyrightProps, TFooterLogoProps } from "./Footer.types";

export const FooterLogo = (footerLogoProps: TFooterLogoProps) => {
    return <div className={footerLogoProps.className}>Typing Campus</div>;
};

const FooterLinks = FOOTER_LINKS.map((footerLink) => {
    return (
        <a key={footerLink.key} href={footerLink.href}>
            {footerLink.title}
        </a>
    );
});

export const FooterNavigation = (footerNavigationProps: TFooterLogoProps) => {
    return <nav className={footerNavigationProps.className}>{FooterLinks}</nav>;
};

export const FooterCopyright = (
    footerCopyrightProps: TFooterCopyrightProps
) => {
    return (
        <p className={footerCopyrightProps.className}>
            &copy; {CURRENT_YEAR} Typing Campus. All rights reserved.
        </p>
    );
};
