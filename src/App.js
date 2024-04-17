import "./assets/css/App.css";
import React from "react";

import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import { Routes, Route } from "react-router-dom";
import PageLogin from "./components/PageLogin";
import Carrito from "./components/Carrito";
import Products  from "./components/Products";

export const CartContext = React.createContext('');
console.log('CartContex: ', CartContext);

function App() {

  return (
    <div className="App">
      <Header />
      <BannerHome />
      <Routes>
        <Route path='/' element = {<Products />}/>
        <Route path='/Login' element = {<PageLogin />}/>
        <Route path='/Cart' element = {<Carrito />}/>
      </Routes>

    </div>
  );
}

export default App;
