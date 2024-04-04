import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./mobiledetails.css";
import { Link } from "react-router-dom";
// import { useCart } from "../context/cart";
// import toast from "react-hot-toast";

function MobileBody() {
  const { id } = useParams();

  const [mobile, setMobile] = useState({});
//   const [cart, setCart] = useCart();

  useEffect(() => {
    if (id) getSingleMobile();
  }, [id]);

  const getSingleMobile = async () => {
    try {
      const { data } = await axios.get('/api/products/'+ id);
      setMobile(data);
    } catch (error) {
      console.error("Cannot fetch data", error);
    }
  };


  
  const handleDelete = (id) => {
    axios.delete('/api/products/'+ id)
    .then(res => console.log(res))
    .then(window.alert("the product is deleted"))
    .catch(err => console.log(err))
   }
 

  return (
    <div>
      <div>
        <div className="maiin">
          <div className="info">
            <div className="overlay" />
            <img src={mobile.productPhoto} alt="" className="mobile" />
            <input type="checkbox" id="rotateToggle" />
            <div id="maskCircle" className="circle">
              <div className="feature one">
                <img src="https://i.ibb.co/fXP6WLf/camera.png" alt="" />
                <img src="https://i.ibb.co/pd9VXn4/display.png" alt="" />
                <div>
                  <h1>Camera & Display</h1>
                  <p>
                    {mobile.camera} <br />
                    <br />
                    {mobile.display}
                  </p>
                </div>
              </div>
              <div className="feature two">
                <img src="https://i.ibb.co/3WC8vKm/processor.png" alt="" />
                <img src="https://i.ibb.co/fryNsNc/battery.png" alt="" />
                <div>
                  <h1>Processor & battery</h1>
                  <p>
                    {mobile.processor} <br /> <br />
                    {mobile.battery}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="controls">
            <div>
              <div style={{ marginBottom: 60, fontSize: 90, color: "#eedfdf" }}>
                {mobile.productPrice}
              </div>
            </div>
            <label htmlFor="rotateToggle" id="upBtn">
              <img src="https://i.ibb.co/GRrFDzD/arrow.png" alt="" id="upBtn" />
            </label>
            <h3>Features</h3>
            <label htmlFor="rotateToggle" id="downBtn">
              <img src="https://i.ibb.co/GRrFDzD/arrow.png" alt="" id="upBtn" />
            </label>
            <div className="conttt">
              <button
                className="btn btn-warning bold-btn"
                style={{ marginTop: 50 }}
                onClick={() => {
                //   setCart([...cart, mobile]);
                  localStorage.setItem(
                    "cart",
                    // JSON.stringify([...cart, mobile])
                  );
                //   toast.success(`Added to cart`);
                }}
              >
                Add To Cart
              </button>

               {/* to handle add to favorite  */}
              <button
                className="btn btn-warning bold-btn"
                style={{ marginTop: 50 }}
                onClick={() => {
                //   setCart([...cart, mobile]);
                  localStorage.setItem(
                    "cart",
                    // JSON.stringify([...cart, mobile])
                  );
                //   toast.success(`Added to cart`);
                }}
              >
                Add To favorite
              </button>




              {mobile && 
            <Link to= {`./Update/${mobile._id}`} class="btn btn-warning bold-btn">update</Link>
      }     
      {mobile &&
      <button onClick={() => handleDelete(mobile._id) } class="btn btn-warning bold-btn">delete</button>
      }
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default MobileBody;