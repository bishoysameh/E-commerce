import { useState } from "react"

const AddProduct = () => {

    const [productTybe, setProductTybe] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDetails, setProductDetails] = useState('')
    const [productPhoto, setProductPhoto] = useState('')

    const [error, setError] = useState(null)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const product = {productTybe , productName ,productPrice ,productDetails ,productPhoto}
      
      const response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        setProductTybe('')
        setProductName('')
        setProductPrice('')
        setProductDetails('')
        setProductPhoto('')
        console.log('new workout added:', json)
      }
  
    }
        
    return (
        <div className="con">
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New product</h3>
  
        <label>product tybe:</label>
        <input 
          type="text" 
          onChange={(e) => setProductTybe(e.target.value)} 
          value={productTybe}
        />


        <label>product name:</label>
        <input 
           type="text" 
           onChange={(e) => setProductName(e.target.value)} 
           value={productName}
        />  
  
        <label>product price:</label>
        <input 
          type="number" 
          onChange={(e) => setProductPrice(e.target.value)} 
          value={productPrice}
        />
  
     
        <label>product details:</label>
        <input 
          type="text" 
          onChange={(e) => setProductDetails(e.target.value)} 
          value={productDetails}
        />



        <label>product photo url:</label>
        <input 
          type="textarea" 
          onChange={(e) => setProductPhoto(e.target.value)} 
          value={productPhoto}
        />


        <button>
            Add Product</button>
        {error && <div className="error">{error}</div>}
      </form>
      </div>
     );
}
 
export default AddProduct;