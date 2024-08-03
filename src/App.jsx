import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Product from "./pages/product/product";
import Header from "./components/common/header/header";
import Subcategories from "./pages/subcategories/subcategories";
import Products from "./pages/products/products";
import PageLoading from "./components/PageLoading/PageLoading";
import Footer from "./components/common/footer/footer";
import Contacts from "./pages/contacts/contacts";

import "./index.css";

function App() {
  return (
    <div className="app">
      <PageLoading />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contacts" element={<Contacts />} />
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
