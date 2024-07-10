import React from "react";
import Categories from "../../components/common/categories/categories";
import Hero from "../../components/home/hero/hero";
import categories from "../../data/categories.json";
import Info from "../../components/home/info/info";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories
        home
        baseLink={"/categories"}
        data={categories.data.slice(0, 8)}
        title={"Наши бренды"}
      />
      <Info />
      {/* <Testimonial /> */}
    </>
  );
}
