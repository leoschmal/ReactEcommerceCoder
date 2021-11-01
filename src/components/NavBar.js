import React, { Component } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItems";
import "./NavBar.css";
import { CartWidget } from "./CartWidget";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navBarItems">
        <div className="container-fluid ">
          <h1 className="navBarLogo">
            <Link to={"/"}> byVEGAN </Link>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
            <ul className="navbar-nav listItems">
              {menuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.link}>
                      {item.titulo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    );
  }
}

export default NavBar;
