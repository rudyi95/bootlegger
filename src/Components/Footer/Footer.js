import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: 10,
          borderTop: "1px solid lightgray",
          height: 100,
          backgroundColor: "#f1f1f1",
          justifyContent: "space-around",
          display: "flex"
        }}
      >
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            Покупка
          </div>
          <NavLink
            to={"/"}  // "/payment"
            exact
            activeStyle={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"  // style
            }}
            /* activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }} */
          >
            <div className="footerItem">Умови оплати</div>
          </NavLink>
          <NavLink
            to={"/"} // "/delivery"
            exact
            activeStyle={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            /* activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }} */
          >
            <div className="footerItem">Доставка</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            Про нас
          </div>
          <NavLink
            to={"/"} // "/info"
            exact
            activeStyle={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            /* activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }} */
          >
            <div className="footerItem">Інформація про магазин</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            Соціальні мережі
          </div>
          <a
            href="https://www.instagram.com/13_bootlegger/"
            target="blank"
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
          >
            <div className="footerItem">Instagram</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
