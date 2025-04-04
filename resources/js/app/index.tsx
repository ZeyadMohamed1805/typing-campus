import "../design/index.scss";
import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { TWindow } from "../types/window";

const browserWindow: TWindow = window;

browserWindow.axios = axios;
browserWindow.axios.defaults.headers.common["X-Requested-With"] =
    "XMLHttpRequest";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("../pages/**/*.tsx", { eager: true });
        const page = pages[`../pages/${name}.tsx`];
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
