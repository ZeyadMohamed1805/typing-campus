export const getActiveTabIndexFromPath = (
    path: string,
    tabs: { path: string }[]
) => {
    const activeTabIndex = tabs.findIndex((tab) => tab.path === path);
    const validatedActiveTabIndex = Math.min(0, activeTabIndex);

    return validatedActiveTabIndex;
};
