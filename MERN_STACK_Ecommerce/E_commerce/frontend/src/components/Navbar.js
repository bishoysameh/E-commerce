import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import { useFavourite } from "../context/favourite";
// import { Badge } from "antd";
// import { useState } from "react";

function Navbar() {
  const [cartProduct, setCartProduct] = useCart();
  const [favouriteProduct, setFavouriteProduct] = useFavourite();
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  // const [cartCount, setCartCount] = useState(0);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
    setCartProduct([]);
    setFavouriteProduct([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("favourite");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand">
            E-commerce
          </Link>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01 "
            style={{ marginRight: 650 }}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-decoration-none"
                  id="categoryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="categoryDropdown"
                >
                  <li>
                    <NavLink to="/category/laptops" className="dropdown-item">
                      Laptops
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/mobiles" className="dropdown-item">
                      Mobiles
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <NavLink to="/category/laptops" className="nav-link ">
                  laptops
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/category/mobiles" className="nav-link ">
                  mobiles
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link text-decoration-none"
                    >
                      Sign up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link text-decoration-none"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="nav-link text-decoration-none"
                    >
                      log out
                    </NavLink>
                  </li>
                </>
              )}

              {auth.user && auth.user.role === 1 ? (
                <>
                  {" "}
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle text-decoration-none"
                      id="categoryDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Admin
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="categoryDropdown"
                    >
                      <li>
                        <NavLink to="/addProduct" className="dropdown-item">
                          Add Product
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  {auth.user && auth.user.role === 0 ? (
                    <li className="nav-item">
                      <NavLink
                        to="/profile"
                        className="nav-link text-decoration-none"
                      >
                        profile
                      </NavLink>
                    </li>
                  ) : (
                    " "
                  )}

                  <li className="nav-item">
                    <NavLink
                      to="/favourite"
                      className="nav-link text-decoration-none"
                      style={{ textDecoration: "none" }}
                    >
                      🤍
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/cart"
                      className="nav-link text-decoration-none"
                      style={{ textDecoration: "none" }}
                    >
                      🛒
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
