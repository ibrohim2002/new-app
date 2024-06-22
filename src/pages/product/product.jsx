import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import Container from "../../components/common/container/container";
import "./styles.css";

export default function Product() {
  const { productSlug } = useParams();
  const product = products.find((el) => el.slug === productSlug);

  return (
    <Container className="product_view">
      <div className="product_left">
        <img src={product.previewImage} alt="previewImage" />
      </div>
      <div className="product_right">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <div></div>
      </div>
    </Container>
  );
}
