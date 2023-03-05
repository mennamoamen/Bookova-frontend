import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import styles from "./Nav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  // const cart = useSelector((state) => state.cartReducer.cart);
  // console.log(cart.length);

  return (
    <div>
      <nav className={`${styles.nav} navbar navbar-expand-lg bg-body-tertiary`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="h">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <NavLink className="nav-link text-light" to="logsign">
                  log in - sign up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="profile">
                  Profile
                </NavLink>
              </li>
              <div>
                <li className="nav-item d-flex">
                  <NavLink className="nav-link" to="cart">
                    Cart
                  </NavLink>
                  <span className="d-flex align-self-end text-light">0</span>
                </li>
              </div>

              <li className="nav-item">
                <NavLink className="nav-link" to="wishlist">
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="addbook">
                  Add Book
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
