// import React, { useState } from "react";
import "./styles.css";
import categories from "../../../data/categories.json";
import Card from "../card/card";
import BlackButton from "../blackButton/blackButton";
export default function Categories({ home }) {
  // const [dataLength, setDatalength] = useState(home ? 7 : categories.length)
  const dataLength = home ? 7 : categories.length
  // const handleClick = ()=>{
  //   setDatalength(dataLength+1)
  // }

  return (
    <div className="category-grid">
      {home?<div>katalog</div>:''}
      {categories.slice(0, dataLength).map((e) => {
        return <Card info={e} />;
      })}
      {home?<BlackButton link="/categories" className="categorybtn">button</BlackButton>:''}
    </div>
  );
}
