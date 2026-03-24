import React from "react";
import ReactDOM from "react-dom/client";
import { FilterProvider } from "./components/FilterContext";
import { CartProvider } from "./components/CartContext";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </React.StrictMode>,
);
