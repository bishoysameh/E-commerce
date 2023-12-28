import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    _id: id,
    productType: "",
    productName: "",
    productPrice: "",
    productDetails: "",
    productPhoto: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          productType: res.data.productType,
          productName: res.data.productName,
          productPrice: res.data.productPrice,
          productDetails: res.data.productDetails,
          productPhoto: res.data.productPhoto,
        }));
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/products/${id}`, product)
      .then((res) => {
        toast.success("done");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bod">
        <div className="mai">
          <form onSubmit={handleSubmit}>
            <label className="addprod" aria-hidden="true">
              update product
            </label>
            <input
              className="inpu"
              type="text"
              value={product.productType}
              onChange={(e) =>
                setProduct((prevProduct) => ({
                  ...prevProduct,
                  productType: e.target.value,
                }))
              }
              name="txt"
              placeholder="Product type"
              required
            />
            <input
              className="inpu"
              type="text"
              onChange={(e) =>
                setProduct((prevProduct) => ({
                  ...prevProduct,
                  productName: e.target.value,
                }))
              }
              value={product.productName}
              placeholder="Product Name"
              required
            />
            <input
              className="inpu"
              type="text"
              value={product.productPrice}
              onChange={(e) =>
                setProduct((prevProduct) => ({
                  ...prevProduct,
                  productPrice: e.target.value,
                }))
              }
              placeholder="Product Price"
              required
            />

            <input
              className="inpu"
              type="text"
              value={product.productDetails}
              onChange={(e) =>
                setProduct((prevProduct) => ({
                  ...prevProduct,
                  productDetails: e.target.value,
                }))
              }
              required
            />

            <input
              className="inpu"
              type="text"
              value={product.productPhoto}
              onChange={(e) =>
                setProduct((prevProduct) => ({
                  ...prevProduct,
                  productPhoto: e.target.value,
                }))
              }
            />

            <button className="b" type="Submit">
              update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
