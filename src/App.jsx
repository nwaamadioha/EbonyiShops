import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"


const App = () => {
  const user = true;
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Home />} exact/>
      <Route path="/products/:category" element={<ProductList />} exact/>
      <Route path="/product/:id" element={<Product />} exact/>
      <Route path="/cart" element={<Cart />} exact/>
      <Route path="/register" element={ user ? <Navigate to="/"/> :<Register />} exact/>
      <Route path="/login"  element={ user ? <Navigate to="/"/> : <Login />} exact/>
      </Routes>
    </Router>
  );
};

export default App;