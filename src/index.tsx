import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ServerClientInterface from "./interface";

createRoot(document.getElementById("main")!).render(
    <StrictMode>
        <ServerClientInterface />
    </StrictMode>
);
