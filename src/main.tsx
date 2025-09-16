import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import luxury fonts for the MOULVI brand
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/700.css";

createRoot(document.getElementById("root")!).render(<App />);
