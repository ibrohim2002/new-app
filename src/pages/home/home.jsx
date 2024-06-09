import React from "react";
import Categories from "../../components/common/categories/categories";
import Hero from "../../components/home/hero/hero";
import categories from "../../data/categories.json";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories
        home
        baseLink={"/categories"}
        data={categories.slice(0, 8)}
        title={"Categories"}
      />
    </>
  );
}
