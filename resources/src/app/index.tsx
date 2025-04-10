import "../../styles/index.scss";
import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { TWindow } from "../types/window";
import { ReactNode } from "react";
import { TPages } from "../types/pages";
import Layout from "../providers/layout/Layout";

const browserWindow: TWindow = window;

browserWindow.axios = axios;
browserWindow.axios.defaults.headers.common["X-Requested-With"] =
    "XMLHttpRequest";

createInertiaApp({
    resolve: (name) => {
        const pages: TPages = import.meta.glob("../pages/**/*.tsx", { eager: true });
        const page = pages[`../pages/${name}.tsx`];
        page.default.layout = page.default.layout || ((page: ReactNode) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: false
});
