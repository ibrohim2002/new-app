import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Categories from "./pages/categories";
import Product from "./pages/product";

function App() {
  return (
    <div className="App">
      <div className="header">header</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:productId" element={<Product />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
