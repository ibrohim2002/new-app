import React from "react";
import Categories from "../../components/common/categories/categories";
import categories from "../../data/categories.json";

export default function CategoriesPage() {
  return (
    <div>
      <Categories
        baseLink={"/categories"}
        data={categories}
        title={"Categories"}
      />
    </div>
  );
}
