// import { json } from "react-router-dom";

import { useAuth } from "../context/auth";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./mobile.css";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Get products
  const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      const jsonData = await response.json();

      setProducts(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Cannot fetch data", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const toggleDetails = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? { ...product, toggledetails: !product.toggledetails }
          : product
      )
    );
  };

  // Filter products based on search query
  const filteredMobiles = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <div className="searchhhh">
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="search">
                <i className="fa fa-search" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="SEARCH PRODUCTS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* search */}
      <div
        className="container-fluid bg-trasparent my-4 p-3 cc"
        style={({ position: "relative" }, { minHeight: "300vh" })}
      >
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {filteredMobiles.map((product) => (
            <div key={product._id} className="col hp">
              <div className="card h-100 shadow-sm">
                <Link to={`/products/ProductDetails/${product._id}`}>
                  <img
                    src={product.productPhoto}
                    className="card-img-top"
                    alt={product.productName}
                  />
                </Link>

                <div className="card-body">
                  <div className="clearfix mb-3">
                    <span className="float-start badge rounded-pill bg-success">
                      {product.productPrice}$
                    </span>
                  </div>
                  <h5 className="card-productName">{product.productName}</h5>
                  {product.toggledetails && <p>{product.productDetails}</p>}
                  <div className="d-grid gap-2 my-4">
                    <button
                      className="btn btn-warning bold-btn"
                      onClick={() => toggleDetails(product._id)}
                    >
                      {product.toggledetails ? "Hide" : "See"} Details
                    </button>
                    <button
                      className="btn btn-warning bold-btn"
                      onClick={() =>
                        navigate(`/products/ProductDetails/${product._id}`)
                      }
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button
        className="btn btn-warning bold-btn addp"
        onClick={() => navigate()}
      >
        add
      </button> */}
      <Footer />
    </div>
  );
}

export default Home;
