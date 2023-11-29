
import axios from "axios";
import { useState , useEffect } from "react"
import { Link, useParams } from "react-router-dom"


const ProductBody = () => {

    const [products,setProduct] = useState(null)

   const {id} = useParams();



   const url = '/api/products/'+ id;

    useEffect(() => {
        const fetchWorkouts = async () => {
          const response = await fetch(url)
          const json = await response.json()
    
          if (response.ok) {
            setProduct(json)
          }
        }
    
        fetchWorkouts()
      }, [url])
    



      const handleDelete = (id) => {
         axios.delete('/api/products/'+ id)
         .then(res => console.log(res))
         .then(window.alert("the product is deleted"))
         .catch(err => console.log(err))
        }
      
 

      
    return ( 


<section class="articles">
  <article class="article">

    
    <div class="article__image">
      <img src={products && products.productPhoto} alt=""/>
    </div>
    <div class="article__info">
      <h1 class="article__info--title">{products && products.productTybe} {products && products.productName}</h1>
      <p class="article__info--description">{ products && products.productDetails}</p>
      <p class="price"><h2>{ products && products.productPrice}$ </h2></p>
      </div>

      <a href="./" class="btn-article">add to favorite</a>
      <a href="./" class="btn-article">add to cart</a>
      {products && 
            <Link to= {`./Update/${products._id}`} class="btn-article">update</Link>
      }     
      {products &&
      <button onClick={() => handleDelete(products._id) } class="btn-article">delete</button>
      }
        

  </article>
  </section>

    )
}
 
export default ProductBody;