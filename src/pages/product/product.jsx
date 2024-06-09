import { useParams } from "react-router-dom";
import products from "../../data/products.json";

export default function Product() {
  const { productSlug } = useParams();
  const product = products.find((el) => el.slug === productSlug);

  return <div>{product.name}</div>;
}
