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
        <Link to="/categories">Наши бренды</Link>
        {/* <Link to="/#about">About</Link> */}
        <Link to="/contacts">Контакты</Link>
      </div>
      <div className="header_right">
        <Basket />
      </div>
    </Container>
  );
}
