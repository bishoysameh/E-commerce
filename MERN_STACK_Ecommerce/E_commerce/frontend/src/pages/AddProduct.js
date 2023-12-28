import { useState } from "react";
import toast from "react-hot-toast";

import axios from "axios";

const AddProduct = () => {
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productPhoto, setProductPhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/productsAdd", {
        productType,
        productName,
        productPrice,
        productDetails,
        productPhoto,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setProductType("");
        setProductName("");
        setProductPrice("");
        setProductDetails("");
        setProductPhoto("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="bod">
        <div className="mai">
          <form onSubmit={handleSubmit}>
            <label className="addprod" aria-hidden="true">
              Add a new product
            </label>
            <input
              className="inpu"
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              name="txt"
              placeholder="Product type"
              required
            />
            <input
              className="inpu"
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              placeholder="Product Name"
              required
            />
            <input
              className="inpu"
              type="number"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              placeholder="Product Price"
              required
            />

            <input
              className="inpu"
              type="text"
              onChange={(e) => setProductDetails(e.target.value)}
              value={productDetails}
              placeholder="Product Details"
              required
            />

            <input
              className="inpu"
              type="text"
              onChange={(e) => setProductPhoto(e.target.value)}
              value={productPhoto}
              placeholder="Product Photo"
              required
            />

            <button className="b" type="Submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
