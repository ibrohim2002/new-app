import React from "react";
import Container from "../container/container";

import "./styles.css";
import { Link } from "react-router-dom";
import Basket from "../basket/basket";

export default function Header() {
  return (
    <Container className="header">
      <Link to="/" className="header_left">
        <img src="/icons/logo.svg" alt="logo" className="logo" />
      </Link>
      <div className="header_middle">
        <Link to="/category">category</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact us</Link>
      </div>
      <div className="header_right">
        <Basket />
      </div>
    </Container>
  );
}
