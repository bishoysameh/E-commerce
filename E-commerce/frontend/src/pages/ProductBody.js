
import axios from "axios";
import { useState , useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useCartContext";


const ProductBody = () => {

    const [product,setProduct] = useState(null)
      const {user} = useAuthContext()
   const {id} = useParams();

const{dispatch} =useWorkoutsContext()
  //  const [productTybe, setProductTybe] = useState('')
  //   const [productName, setProductName] = useState('')
  //   const [productPrice, setProductPrice] = useState('')
  //   const [productDetails, setProductDetails] = useState('')
  //   const [productPhoto, setProductPhoto] = useState('')



   const url = '/api/products/'+ id;

    useEffect(() => {
        const fetchWorkouts = async () => {
          const response = await fetch(url , {
            headers: {'Authorization': `Bearer ${user.token}`},
          })
          const json = await response.json()
    
          if (response.ok) {
            setProduct(json)
          }
        }
       if(user){
        fetchWorkouts()
       }
      }, [url , user])
    

       const handleAddToCart = async (e) => {
        e.preventDefault()
          if(!user){
            return
          }
            //  const cart = { product}
            const response = await fetch ('/api/cart' , {
              body:JSON.stringify(product),
              method:'POST', 
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
              }
              })
              const json = await response.json();
              // if (!response.ok) {
              //   // setError(json.error)
              // }
              if (response.ok) {

                // setError(null)
                // setProductTybe('')
                // setProductName('')
                // setProductPrice('')
                // setProductDetails('')
                // setProductPhoto('')
                console.log('product added to Cart:', json)
                dispatch({type: 'CREATE_WORKOUT', payload: json})

              }
          }
       

      const handleDelete = (id) => {

        if (!user){
          return
        }
         axios.delete('/api/products/'+ id ,
         {
          headers: {'Authorization': `Bearer ${user.token}`},
         })
         .then(res => console.log(res))
         .then(window.alert("the product is deleted"))
         .catch(err => console.log(err))
        }
      
 

      
    return ( 


<section class="articles">
  <article class="article">

    
    <div class="article__image">
      <img src={product && product.productPhoto} alt=""/>
    </div>
    <div class="article__info">
      <h1 class="article__info--title">{product && product.productTybe} {product && product.productName}</h1>
      <p class="article__info--description">{ product && product.productDetails}</p>
      <p class="price"><h2>{ product && product.productPrice}$ </h2></p>
      </div>

      <a href="./" class="btn-article">add to favorite</a>
      <a href="./" class="btn-article"  onClick={handleAddToCart}> add to cart</a>
      {product && 
            <Link to= {`./Update/${product._id}`} class="btn-article">update</Link>
      }     
      {product &&
      <button onClick={() => handleDelete(product._id) } class="btn-article" >delete</button>
      }
        

  </article>
  </section>

    )
}
 
export default ProductBody;