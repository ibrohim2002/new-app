import Button from "../../common/button/button";
import Container from "../../common/container/container";

import "./styles.css";

export default function Hero() {
  return (
    <Container className="hero">
      <img src="/images/bg-image.jpg" alt="back_photo" className="hero_bg" />
      <div className="hero_content">
        <h1 className="hero_content_h">
          🌱 <br /> The nature candle
        </h1>
        <p className="hero_content_p">
          {
            "All handmade with natural soy wax, Candleaf is a companion for \n all your pleasure moments"
          }
        </p>
        <Button className="hero_content_btn">Discovery our collection</Button>
      </div>
    </Container>
  );
}
