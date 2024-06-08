import React from "react";
import "./styles.css";

export default function Container({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}
