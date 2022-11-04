import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

// create a root
const root = createRoot(container);

//render app to root
root.render(<App />);
