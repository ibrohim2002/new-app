import React from "react";
import Categories from "../../components/common/categories/categories";
import subcategories from "../../data/subcategories.json";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import { useParams } from "react-router-dom";

export default function Subcategories() {
  const { categorySlug } = useParams();

  const category = categories.data.find(
    (el) => el.attributes.slug === categorySlug
  );
  const data = subcategories.data.filter(
    (el) => el.attributes.category.data.id === category.id
  );

  const data2 = products.data.filter(
    (p) =>
      p.attributes.category.data &&
      p.attributes.category.data.id === category.id &&
      !p.attributes.subcategory.data
  );
  // .map((p) => {
  //   return { ...p, slug: `product/${p.attributes.slug}` };
  // });
  console.log(data2);

  return (
    <>
      <Categories
        title={category.attributes.name}
        data={[...data, ...data2]}
        baseLink={`/categories/${categorySlug}`}
      />
    </>
  );
}
