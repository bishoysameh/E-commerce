import Footer from "../components/Footer";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Cart() {
  const [auth] = useAuth();
  const [cartProduct, setCartProduct] = useCart();
  const navigate = useNavigate();
  const getAllCart = async () => {
    // Check if the user is authenticated
    if (auth.token) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.token}`,
        };

        const { data } = await axios.get(`http://localhost:8080/api/cart/`, {
          headers,
        });
        setCartProduct(data);
      } catch (error) {
        console.error("Cannot fetch data", error);
      }
    }
  };

  useEffect(() => {
    getAllCart();
  }, [auth.token, setCartProduct]);

  // Remove an item from the cart and update both state and localStorage
  const removeCartItem = async (id) => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/cart/${id}`,
        {
          headers,
        }
      );
      getAllCart();
    } catch (error) {
      console.error("Cannot fetch data", error);
    }
  };
  // useEffect(() => {
  //   getAllCart();
  // }, [auth.token, setCartProduct]);

  return (
    <div>
      <div style={{ minHeight: "80vh" }}>
        <h1>{`hello ${auth.token && auth.user.name}`}</h1>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="mb-3">
                          <button
                            className="btn btn-warning bold-btn"
                            onClick={() => navigate("/")}
                          >
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            Continue shopping
                          </button>
                        </h5>
                        <hr />

                        <div className="card mb-3 mb-lg-0">
                          {cartProduct.map((product) => (
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={product.productPhoto}
                                      className="img-fluid rounded-3"
                                      alt="Shopping item"
                                      style={{ width: 65 }}
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <h5>{product.productName}</h5>
                                    {console.log(cartProduct)}
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: 50 }}></div>
                                  <div style={{ width: 80 }}>
                                    <h5 className="mb-0">
                                      {product.productPrice}$
                                    </h5>
                                  </div>
                                  <button
                                    className="btn btn-link"
                                    onClick={() => removeCartItem(product._id)}
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="card bg-primary text-white rounded-3">
                          <div className="card-body">
                            <p className="small mb-2">Card type</p>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-mastercard fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-visa fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-amex fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-paypal fa-2x" />
                            </a>
                            <form className="mt-4">
                              <div className="form-outline form-white mb-4">
                                <input
                                  type="text"
                                  id="typeName"
                                  className="form-control form-control-lg"
                                  siez={17}
                                  placeholder="Name on Card "
                                />
                              </div>
                              <div className="form-outline form-white mb-4">
                                <input
                                  type="text"
                                  id="typeText"
                                  className="form-control form-control-lg"
                                  siez={17}
                                  placeholder="1234 5678 9012 3457"
                                  minLength={19}
                                  maxLength={19}
                                />
                              </div>
                              <div className="row mb-4">
                                <div className="col-md-6">
                                  <div className="form-outline form-white">
                                    <input
                                      type="text"
                                      id="typeExp"
                                      className="form-control form-control-lg"
                                      placeholder="MM/YYYY"
                                      size={7}
                                      minLength={7}
                                      maxLength={7}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-outline form-white">
                                    <input
                                      type="password"
                                      id="typeText"
                                      className="form-control form-control-lg"
                                      placeholder="cvv"
                                      size={1}
                                      minLength={3}
                                      maxLength={3}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-outline form-white">
                                    <input
                                      type="text"
                                      id="typeExp"
                                      className="form-control form-control-lg"
                                      placeholder="promocode"
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>

                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Total</p>
                              <p className="mb-2">$$$</p>
                            </div>
                            <button
                              type="button"
                              className="btn btn-warning bold-btn"
                              onClick={() =>
                                toast.success("successfull payment")
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <span>
                                  Checkout
                                  <i className="fas fa-long-arrow-alt-right ms-2" />
                                </span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
