import ProductDetails from '../components/ProductDetails';
 import { useEffect , useState } from "react";
import { Link } from 'react-router-dom';



const MyHome = () => {

const [products,setProduct] = useState(null)



useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const json = await response.json()

      if (response.ok) {
        setProduct(json)
      }
    }

    fetchProducts()
  }, [])



    return ( 
<body>
<h1 className="title-shop">laptops</h1>

 
      
            <div className="home">
              <div className="workouts">
                {/* {error} */}
                <main className="main bd-grid"> 
                {products && products.map(product => (
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

          )
}
 
export default MyHome;