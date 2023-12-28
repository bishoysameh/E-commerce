import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Mobiles from "./pages/Mobiles";
import Laptops from "./pages/Laptops";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import UpdateProduct from "./pages/UpdateProduct";
import Favourite from "./pages/Favourite";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";

export default function App() {
  return (
    <div>
      <Navbar />

      <div className="pages">
        <Toaster />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/mobiles" element={<Mobiles />}></Route>
          <Route
            path="/products/ProductDetails/:id"
            element={<ProductDetails />}
          ></Route>

          <Route path="/category/laptops" element={<Laptops />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/favourite" element={<Favourite />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route
            path="//UpdateProducts/:id"
            element={<UpdateProduct />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
