
   const express = require('express');
//   const Product = require('../models/productModel');
const { createProduct,
       getProducts,
   getProduct,
   deleteProduct,
   updateProduct } = require('../controllers/productController');



const router = express.Router();


  //get all products
   router.get('/' , getProducts);




   //get a single product
   router.get('/:id' ,getProduct);


  //create a product 
   router.post('/' ,createProduct)



  //update product
   router.put('/:id' , updateProduct)

   
   //delete product
   router.delete('/:id' , deleteProduct)
  


   module.exports = router;