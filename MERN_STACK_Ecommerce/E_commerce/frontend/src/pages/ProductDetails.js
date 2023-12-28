import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./mobiledetails.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { useFavourite } from "../context/favourite";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();
  const [favourite, setFavourite] = useFavourite();
  useAuth();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products/${id}`
        );
        setProduct(data);
        const storedAuth = localStorage.getItem("auth");
        if (storedAuth) {
          const parsedAuth = JSON.parse(storedAuth);
          setAuth(parsedAuth);
        }
      } catch (error) {
        console.error("Cannot fetch data", error);
      }
    };

    if (id) {
      getSingleProduct();
    }
  }, [id, setAuth]);
  console.log(auth.token);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/cart/",
        {
          _id: product.id,
          productName: product.productName,
          productDetails: product.productDetails,
          productPhoto: product.productPhoto,
          productPrice: product.productPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      toast.success("added to cart");
      // Optionally, you can update the cart state here
      setCart([...cart, product]);
      // Redirect to a specific route (e.g., cart page)
      navigate("/cart");
    } catch (error) {
      console.error(error);
      toast.error("log in fisrt please");
    }
  };
  const handleFavourite = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/favourite/",
        {
          _id: product.id,
          productName: product.productName,
          productDetails: product.productDetails,
          productPhoto: product.productPhoto,
          productPrice: product.productPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      toast.success("added to favourite");
      // Optionally, you can update the cart state here
      setFavourite([...favourite, product]);
      // Redirect to a specific route (e.g., cart page)
      navigate("/favourite");
    } catch (error) {
      console.error(error);
      toast.error("log in fisrt please");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/products/${id}`
      );
      console.log(response);
      toast.success("The product is deleted");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting the product");
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/UpdateProducts/${product._id}`);
  };

  console.log(product.productPhoto);
  return (
    <div>
      <div>
        <div className="maiin">
          <div className="info">
            <div className="overlay" />
            <img src={product.productPhoto} alt="" className="mobile" />
            <input type="checkbox" id="rotateToggle" />
            <div id="maskCircle" className="circle">
              <div className="feature one">
                <img src="https://i.ibb.co/fXP6WLf/camera.png" alt="" />
                <img src="https://i.ibb.co/pd9VXn4/display.png" alt="" />
                <div>
                  <h1>Camera & Display</h1>
                  <p>{product.productDetails}</p>
                </div>
              </div>
              <div className="feature two">
                <img src="https://i.ibb.co/3WC8vKm/processor.png" alt="" />
                <img src="https://i.ibb.co/fryNsNc/battery.png" alt="" />
                <div>
                  <h1>Processor & battery</h1>
                  <p>{product.productDetails}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="controls">
            <div>
              <div style={{ marginBottom: 60, fontSize: 90, color: "#eedfdf" }}>
                {product.productPrice}$
              </div>
            </div>
            <label htmlFor="rotateToggle" id="upBtn">
              <img src="https://i.ibb.co/GRrFDzD/arrow.png" alt="" id="upBtn" />
            </label>
            <h3>Features</h3>
            <label htmlFor="rotateToggle" id="downBtn">
              <img src="https://i.ibb.co/GRrFDzD/arrow.png" alt="" id="upBtn" />
            </label>
            <div>
              {auth.user && auth.user.role === 1 ? (
                <>
                  {" "}
                  <button
                    className="btn text-danger bold-btn"
                    style={{ marginTop: 50 }}
                    onClick={() => handleDelete(product._id)}
                  >
                    delete
                  </button>
                  <button
                    className="btn text-success bold-btn"
                    style={{ marginTop: 50 }}
                    onClick={() => handleUpdate(product._id)}
                  >
                    update
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-warning bold-btn"
                    style={{ marginTop: 50 }}
                    onClick={handleClick}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-warning bold-btn"
                    style={{ marginTop: 50 }}
                    onClick={() => handleFavourite()}
                  >
                    Add To favourite
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
