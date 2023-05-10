import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createContext } from "react";
import Context from "./context";

export const CartContext = createContext();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Context>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Context>
);
