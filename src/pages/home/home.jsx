import React from "react";
import Categories from "../../components/common/categories/categories";
import Hero from "../../components/home/hero/hero";
import categories from "../../data/categories.json";
import Info from "../../components/home/info/info";
import Testimonial from "../../components/home/testimonial/testimonial";

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
      <Info />
      {/* <Testimonial /> */}
    </>
  );
}
