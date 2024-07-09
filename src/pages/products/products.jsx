import subcategories from "../../data/subcategories.json";
import products from "../../data/products.json";
import { useParams } from "react-router-dom";
import Categories from "../../components/common/categories/categories";

export default function Products() {
  const { categorySlug, subcategorySlug } = useParams();

  const subcategory = subcategories.data.find(
    (el) => el.attributes.slug === subcategorySlug
  );

  const data = products.data.filter(
    (el) =>
      el.attributes.subcategory.data &&
      el.attributes.subcategory.data.id === subcategory.id &&
      !el.attributes.category.data
  );
  return (
    <>
      <Categories
        title={subcategory.attributes.name}
        data={data}
        baseLink={`/categories/${categorySlug}/${subcategorySlug}`}
      />
    </>
  );
}
