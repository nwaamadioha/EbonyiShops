import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
  
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Home />} exact/>
      <Route path="/products/:category" element={<ProductList />} exact/>
      <Route path="/product/:id" element={<Product />} exact/>
      <Route path="/cart" element={<Cart />} exact/>
      <Route path="/register" element={<Register />} exact/>
      <Route path="/login" element={<Login />} exact/>
      </Routes>
    </Router>
  );
};

export default App;