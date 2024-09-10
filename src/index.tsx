import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router";

createRoot(document.getElementById("main")!).render(
    <StrictMode>
        <Router />
    </StrictMode>
);
