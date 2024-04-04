 import axios from 'axios';
import { useState , useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from '../hooks/useAuthContext';

const Update = () => {
const{id} = useParams();

const [products , setProducts] =useState ({
    _id : id ,
    productTybe : '',
    productName : '',
    productPrice : '',
    productDetails : '',
    productPhoto : ''
})

const {user} = useAuthContext()

useEffect(() => {
 
axios.get('/api/products/'+ id ,{
  headers : {'Authorization': `Bearer ${user.token}`}
})
.then(res => {
    setProducts({...products ,
                 productTybe : res.data.productTybe ,
                 productName :res.data.productName ,
                 productPrice : res.data.productPrice ,
                 productDetails:res.data.productDetails ,
                  productPhoto : res.data.productPhoto})
})
.catch(err => console.log(err))
},[user])


const navigate = useNavigate();


const handleSubmet = (e) => {
e.preventDefault();
if(!user){
  return
}

axios.put('/api/products/'+ id ,products , {
  headers: {'Authorization': `Bearer ${user.token}`}
})
.then(res => {
    navigate('/');
   
})
.catch(err => console.log(err))
}
 

    return ( 
        <div className="con">
        <form className="create" onSubmit={handleSubmet}> 
        <h3>update product</h3>
  
        <label>product tybe:</label>
        <input 
          type="text" 
          value={products.productTybe}
          onChange={(e) => setProducts({...products , productTybe: e.target.value})} 

        />


        <label>product name:</label>
        <input 
           type="text" 
           value={products.productName}
           onChange={(e) => setProducts({...products , productName : e.target.value})} 

        />  
  
        <label>product price:</label>
        <input 
          type="number" 
          value={products.productPrice}
          onChange={(e) => setProducts({...products, productPrice :e.target.value})} 

        />
  
     
        <label>product details:</label>
        <input 
          type="text" 
          value={products.productDetails}
          onChange={(e) => setProducts({...products, productDetails :e.target.value})} 

        />



        <label>product photo url:</label>
        <input 
          type="textarea" 
          value={products.productPhoto}
          onChange={(e) => setProducts({...products, productPhoto :e.target.value})} 

        />


        <button>
            update Product</button>
      </form>

      </div>
     );
}
 
export default Update;