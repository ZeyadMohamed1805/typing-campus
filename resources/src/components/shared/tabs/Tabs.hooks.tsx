import { usePage } from "@inertiajs/react";
import { getActiveTabIndexFromPath } from "./Tabs.helpers";
import { useState } from "react";
import { TTab } from "./Tabs.types";

export const useActiveTab = (tabs: Array<TTab>) => {
    const page = usePage();
    const [activeTabIndex, setActiveTabIndex] = useState(
        getActiveTabIndexFromPath(page.url, tabs)
    );

    return { activeTabIndex, setActiveTabIndex };
};
