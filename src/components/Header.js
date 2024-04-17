import React, { Component } from "react";
import logo from "../assets/images/pngtree-shop-icon-isolated-on-abstract-background-png-image_5165603.jpg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* LOGO */}
          <div id="logo">
            <Link to="/">
              <img src={logo} className="app-logo" alt="Logotipo" />
            </Link>
          </div>

          {/* MENU */}
          <nav id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Login">Sign in</Link>
              </li>
              <li>
                <Link to="/Cart">Cart</Link>
              </li>
            </ul>
          </nav>

          {/*LIMPIAR FLOTADOS*/}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
