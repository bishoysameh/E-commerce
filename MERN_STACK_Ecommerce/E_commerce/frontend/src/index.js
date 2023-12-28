import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart";
import { FavouriteProvider } from "./context/favourite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <FavouriteProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FavouriteProvider>
  </AuthProvider>
);
