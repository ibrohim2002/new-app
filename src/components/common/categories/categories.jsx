import categories from "../../../data/categories.json";
import Cards from "../cards/cards";
import Container from "../container/container";

import "./styles.css";

export default function Categories({ home }) {
  const dataLength = home ? 8 : categories.length;

  return (
    <Container className="catalog">
      <h2 className="catalog_h2">Catalog</h2>
      <p className="catalog_p">Order it for you or for your beloved ones</p>
      <Cards data={categories.slice(0, dataLength)} className="catalog_cards" />
    </Container>
  );
}
