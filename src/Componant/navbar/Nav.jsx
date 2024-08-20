/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Container } from "@mui/material";

function Nav() {
  return (
    <section className="nav">
      <Container fixed className="h-nav " sx={{ display: "flex", flexGrow: 1 }}>
        <div className="img">
          <NavLink to="/">
            <img src="https://the7.io/small-store/wp-content/uploads/sites/42/2017/07/lg-small.png"></img>
          </NavLink>
        </div>
        <ul className="links">
          <li>
            <NavLink to="/about">
              <GiKnifeFork />
              About Snacks
            </NavLink>
          </li>
          <li>
            <NavLink to="/Benefits">
              <FaStar />
              Benefits
            </NavLink>
          </li>
          <li>
            <NavLink to="/OnlineStore">
              <FaBasketShopping />
              Online Store
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              <IoMdMail />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/FindStores">
              <FaLocationDot />
              Find in Stores
            </NavLink>
          </li>
          <li>
            <span>
              <FaLocationDot />
              <FaLocationDot />
              <FaLocationDot />
            </span>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Nav;
