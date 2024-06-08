import React from "react";
import Card from "../card/card";

import "./styles.css";

export default function Cards({ data, className }) {
  return (
    <div className={`cards ${className}`}>
      {data.map((e) => {
        return <Card info={e} />;
      })}
    </div>
  );
}
