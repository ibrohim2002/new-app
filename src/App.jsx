import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Product from "./pages/product/product";
import Header from "./components/common/header/header";
import Subcategories from "./pages/subcategories/subcategories";
import Products from "./pages/products/products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categorySlug" element={<Subcategories />} />
        <Route
          path="/categories/:categorySlug/:subcategorySlug"
          element={<Products />}
        />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
