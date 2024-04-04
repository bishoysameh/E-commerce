import React, { useState, useEffect } from "react";
import "./mobile.css";
import { Link } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
import MobileDetails from "../components/MobileDetails";

function Mobiles() {
//   const navigate = useNavigate();
  const [mobiles, setMobiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Get products
  const getAllMobiles = async () => {
    try {
      const response = await fetch('/api/products');
      const json = await response.json();
      setMobiles(json);
    } catch (error) {
      console.error("Cannot fetch data", error);
    }
  };

  

  useEffect(() => {
    getAllMobiles();
  }, []);


  
  

  // Filter mobiles based on search query
  const filteredMobiles = mobiles.filter((mobile) =>
    mobile.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (

    // ******************************//
    
<div >
       <body>
                <label htmlFor="">   write to search     </label>
            {/* <h1>search</h1> */}
            <input 
            type="text"
            className="form-control"
            placeholder="SEARCH PRODUCTS"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
                />
            <ul id="suggestions"></ul>

            </body>

            <body>
            <h1 className="title-shop">Mobiles</h1>
      
            <div className="home">
              <div className="workouts">
                {/* {error} */}
                <main className="main bd-grid"> 

        

      {filteredMobiles && filteredMobiles.map(mobile => (
             <MobileDetails mobile={mobile} key ={ mobile._id } />
      ))}
       <Link to = "/addProduct">
                { mobiles && <button className='addProduct-btn'>add product</button>}
                </Link>
       </main>
              </div>
            </div>
            </body>
         
</div>

);   
}


export default Mobiles;


