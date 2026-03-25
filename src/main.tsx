import React from "react";
import { UserProvider } from "./components/UserContext";
import ReactDOM from "react-dom/client";
import { FilterProvider } from "./components/FilterContext";
import { CartProvider } from "./components/CartContext";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </FilterProvider>
  </React.StrictMode>,
);
