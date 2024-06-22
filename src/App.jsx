import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Product from "./pages/product/product";
import Header from "./components/common/header/header";
import Subcategories from "./pages/subcategories/subcategories";
import Products from "./pages/products/products";

import "./index.css";
import Footer from "./components/common/footer/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categorySlug" element={<Subcategories />} />
        <Route
          path="/categories/:categorySlug/:subcategorySlug"
          element={<Products />}
        />
        <Route
          path="/categories/:categorySlug/:subcategorySlug/:productSlug"
          element={<Product />}
        />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
