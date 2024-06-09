import Button from "../button/button";
import Cards from "../cards/cards";
import Container from "../container/container";

import "./styles.css";

export default function Categories({ home, baseLink, title, data }) {
  return (
    <Container className="category">
      <h2 className="category_h2">{title}</h2>
      {home ? (
        <p className="category_p">Order it for you or for your beloved ones</p>
      ) : null}
      <Cards data={data} className="category_cards" baseLink={baseLink} />
      {home ? (
        <div className="view_all_btn">
          <Button to="/categories">view all</Button>
        </div>
      ) : null}
    </Container>
  );
}
