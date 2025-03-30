import "../design/index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "../router/Router";
import Provider from "../providers";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <StrictMode>
        <Provider>
            <Router />
        </Provider>
    </StrictMode>
);
