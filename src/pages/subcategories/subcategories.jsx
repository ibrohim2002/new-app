import React from "react";
import Categories from "../../components/common/categories/categories";
import subcategories from "../../data/subcategories.json";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import { useParams } from "react-router-dom";

export default function Subcategories() {
  const { categorySlug } = useParams();
  const category = categories.find((el) => el.slug === categorySlug);
  const data = subcategories.filter((el) => el.categoryId === category.id);
  const data2 = products
    .filter((p) => p.categoryId === category.id && !p.subcategoryId)
    .map((p) => {
      return { ...p, slug: `product/${p.slug}` };
    });

  return (
    <>
      <Categories
        title={category.name}
        data={[...data, ...data2]}
        baseLink={`/categories/${categorySlug}`}
      />
    </>
  );
}
