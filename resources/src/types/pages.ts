import { ReactNode } from "react";

type TPage = {
    default: {
        layout: (page: ReactNode) => ReactNode;
    }
}

export type TPages = Record<string, TPage>;