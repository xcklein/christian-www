import "./styles/index.css";

import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(<App />);
