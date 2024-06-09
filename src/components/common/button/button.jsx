import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Button({ children, to, onClick, className }) {
  if (to) {
    return (
      <Link to={to} className={`button_component ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`button_component ${className}`}>
      {children}
    </button>
  );
}
