import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export default function BlackButton({ children, link, onClick, className }) {
  if (link) {
    return (
      <Link to={link} className={`black-btn ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`black-btn ${className}`}>
      {children}
    </button>
  );
}
