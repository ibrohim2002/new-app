import React from "react";
import Categories from "../components/common/categories/categories";
import Hero from "../components/home/hero/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories home />
    </div>
  );
}
