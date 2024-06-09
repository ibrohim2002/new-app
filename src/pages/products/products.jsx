import subcategories from "../../data/subcategories.json";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import { useParams } from "react-router-dom";
import Categories from "../../components/common/categories/categories";

export default function Products() {
  const { categorySlug, subcategorySlug } = useParams();
  const category = categories.find((el) => el.slug === categorySlug);
  const subcategory = subcategories.find((el) => el.categoryId === category.id);
  const data = products.filter(
    (el) => el.subcategoryId === subcategory.id && !el.categoryId
  );
  return (
    <>
      <Categories
        title={subcategory.name}
        data={data}
        baseLink={`/categories/${categorySlug}/${subcategorySlug}`}
      />
    </>
  );
}
