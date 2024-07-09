import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import Container from "../../components/common/container/container";
import "./styles.css";
import MainImagesSwiper from "../../components/common/productImageSwiper/mainImagesSwiper";

export default function Product() {
  const { productSlug } = useParams();
  const product = products.data.find(
    (el) => el.attributes.slug === productSlug
  );

  return (
    <Container className="product_view">
      <div className="product_left">
        {/* <img
          src={product.attributes.image[0].data.attributes.url}
          alt="previewImage"
        /> */}
        <MainImagesSwiper images={product.attributes.image} />
      </div>
      <div className="product_right">
        <h2>{product.attributes.name}</h2>
        {/* <p>${product.attributes.price}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: product.attributes.info || "",
          }}
        ></div>
      </div>
    </Container>
  );
}
