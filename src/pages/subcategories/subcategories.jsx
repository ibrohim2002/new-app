import React from "react";
import Categories from "../../components/common/categories/categories";
import subcategories from "../../data/subcategories.json";
import { useParams } from "react-router-dom";

export default function Subcategories() {
  const { subcategoryId } = useParams();
  const data = subcategories.filter((el) => el.categoryId === subcategoryId);
  console.log({ subcategories, data });

  return (
    <>
      <Categories title={"Subcategories"} data={data} baseLink={""} />
    </>
  );
}
