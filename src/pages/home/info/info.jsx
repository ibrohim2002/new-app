import React from "react";
import "./styles.css";
import Container from "../../../components/common/container/container";
import Button from "../../../components/common/button/button";
import Categories from "../../../components/common/categories/categories";

export default function Info() {
  return (
    <Container className="info">
        <h2 className="title">Clean and fragrant soy wax</h2>
        <img className="info_img" src="/images/image.jpg" alt="candle" />
        <p className="candle_paragraph">
          Made for your home and for your wellness
        </p>
        <div className="candle_list">
          <p className="candle_list_text">
            <img src="/icons/bold-icon.svg" alt="tick" className="tick_icon" />
            <b>Eco-sustainable:</b> All recyclable materials, 0% CO2 emissions
          </p>
          <p className="candle_list_text">
            <img src="/icons/bold-icon.svg" alt="tick" className="tick_icon" />
            <b>Hyphoallergenic:</b> 100% natural, human friendly ingredients{" "}
          </p>
          <p className="candle_list_text">
            <img src="/icons/bold-icon.svg" alt="tick" className="tick_icon"/>
            <b>Handmade:</b> All candles are craftly made with love.
          </p>
          <p className="candle_list_text">
            <img src="/icons/bold-icon.svg" alt="tick" className="tick_icon" />
            <b>Long burning:</b> No more waste. Created for last long.
          </p>
        </div>
        <Button to={'categories'} className="learn_btn">Learn more</Button>
    </Container>
  );
}
