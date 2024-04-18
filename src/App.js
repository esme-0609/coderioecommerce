import "./assets/css/App.css";
import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import { Routes, Route } from "react-router-dom";
import PageLogin from "./components/PageLogin";
import Carrito from "./components/Carrito";
import Products from "./components/Products";
import store from "./store";

export const CartContext = React.createContext("");
console.log("CartContex: ", CartContext);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <BannerHome />
        <Routes>
          <Route path="/coderioecommerce/build" element={<Products />} />
          <Route path="/coderioecommerce/build" element={<Products />} />
          <Route path="/Login" element={<PageLogin />} />
          <Route path="/Cart" element={<Carrito />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
