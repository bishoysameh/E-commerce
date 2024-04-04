import ProductDetails from '../components/ProductDetails';
 import { useEffect , useState } from "react";
import { Link } from 'react-router-dom';
import {useAuthContext} from '../hooks/useAuthContext'


const MyHome = () => {

const [products,setProduct] = useState([])
const [searchQuery, setSearchQuery] = useState("");

const {user} = useAuthContext()


useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products' , 
      {
        headers:  {'Authorization': `Bearer ${user.token}`}
      })
      const json = await response.json()

      if (response.ok) {
        setProduct(json)
      }
    }
   if(user){
    fetchProducts()
   }
  }, [user])

  console.log (products);

  const filteredLaptops = products.filter((mobile) =>
  mobile.productName.toLowerCase().includes(searchQuery.toLowerCase())
);


    return ( 
<div>

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
<h1 className="title-shop">laptops</h1>
      
            <div className="home">
              <div className="workouts">
                {/* {error} */}
                <main className="main bd-grid"> 
                {filteredLaptops && filteredLaptops.map(product => (
                  <ProductDetails product={product} key={product._id} />
                ))}


                 {/* handle see admin only  */}
                 
                 <Link to = "/addProduct">
                { products && <button className='addProduct-btn'>add product</button>}
                </Link>
                </main>
              </div>
            </div>
            </body>
</div>
          )
}
 
export default MyHome;