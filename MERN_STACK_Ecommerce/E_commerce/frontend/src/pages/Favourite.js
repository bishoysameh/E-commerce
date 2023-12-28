import Footer from "../components/Footer";
import { useFavourite } from "../context/favourite";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import axios from "axios";
import { useEffect } from "react";
// import toast from "react-hot-toast";

function Favourite() {
  const [auth] = useAuth();
  const [favouriteProduct, setFavouriteProduct] = useFavourite();
  const navigate = useNavigate();

  const getAllFavourite = async () => {
    // Check if the user is authenticated
    if (auth.token) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.token}`,
        };

        const { data } = await axios.get(
          `http://localhost:8080/api/favourite/`,
          {
            headers,
          }
        );
        setFavouriteProduct(data);
      } catch (error) {
        console.error("Cannot fetch data", error);
      }
    }
  };

  useEffect(() => {
    getAllFavourite();
  }, [auth.token, setFavouriteProduct]);

  const removeFavouriteItem = async (id) => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };

    try {
      await axios.delete(`http://localhost:8080/api/favourite/${id}`, {
        headers,
      });
      getAllFavourite();
    } catch (error) {
      console.error("Cannot fetch data", error);
    }
  };

  return (
    <div>
      <div style={{ minHeight: "80vh" }}>
        <h1>{`Hello ${auth.token && auth.user.name}`}</h1>
        {/* <pre>{JSON.stringify(auth, null, 4)}</pre>; */}
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
                          {favouriteProduct.map((product) => (
                            <div className="card-body" key={product._id}>
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
                                    onClick={() =>
                                      removeFavouriteItem(product._id)
                                    }
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
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

export default Favourite;
