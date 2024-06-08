import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Categories from "./pages/categories";
import Product from "./pages/product";
import Header from "./components/common/header/header";

function App() {
  return (
    <div className="App">
      <Header />
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
