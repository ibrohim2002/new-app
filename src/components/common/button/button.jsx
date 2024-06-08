import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Button({ children, link, onClick, className }) {
  if (link) {
    return (
      <Link to={link} className={`button_component ${className}`}>
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
