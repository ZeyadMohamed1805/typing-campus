import "../../styles/index.scss";
import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { TWindow } from "../types/window";
import DefaultLayout from "../layouts/DefaultLayout";
import { ReactNode } from "react";
import { TPages } from "../types/pages";

const browserWindow: TWindow = window;

browserWindow.axios = axios;
browserWindow.axios.defaults.headers.common["X-Requested-With"] =
    "XMLHttpRequest";

createInertiaApp({
    resolve: (name) => {
        const pages: TPages = import.meta.glob("../pages/**/*.tsx", { eager: true });
        const page = pages[`../pages/${name}.tsx`];
        page.default.layout = page.default.layout || ((page: ReactNode) => <DefaultLayout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: false
});
