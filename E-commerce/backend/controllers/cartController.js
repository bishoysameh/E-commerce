const Product = require ('../models/cartModel');
const mongoose = require('mongoose');





//get all products in cart
const getProducts = (async (req,res)=>{
    user_id = req.user._id
    const product = await Product.find({user_id}).sort({createdAt:-1})
    res.status(200).json(product);
})




//get a single product
// const getProduct = (async (req,res)=>{

// // destructure the id property from the param object
//     const {id} = req.params ; 

//     //chech if type of id is valid by mongoose
//     if(!mongoose.Types.ObjectId.isValid(id))
//     {
//         res.status(404).json({error : 'no product like this'})
//     }
//     const product = await Product.findById(id)
//     if(!product){
//         res.status(404).json({error : 'no product like this'});
//     }
//     res.status(200).json(product)
// })



//create new product "add product to cart"
const createProduct = (  async (req,res)=>{
    const  { productTybe, productName , productPrice , productDetails , productPhoto ,camera , display , processor ,battery} = req.body;

    try {
        user_id = req.user._id
       const product = await Product.create({productTybe , productName ,productPrice , productDetails ,productPhoto ,user_id, camera ,display , processor ,battery})
       res.status(200).json(product)
     } catch (error) {
       res.status(400).json({error: error.message})
     }
 //  res.json({msg:'post a new workout'});
 });



 //delete a product "from cart"
const deleteProduct = async (req,res)=>{
    const {id} = req.params ; 
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error : 'no product like this'})
    }

    const product = await Product.findByIdAndDelete({_id:id})
    // if(!product){
    //     res.status(404).json({error : 'no product like this hh'})
    // }
    res.status(200).json(product)
}




 //update product
//  const updateProduct = async(req,res)=>{
//     const {id} = req.params ; 
//     if(!mongoose.Types.ObjectId.isValid(id))
//     {
//         res.status(404).json({error : 'no product like thissss'})
//     }
//      const product = await Product.findByIdAndUpdate({_id:id},
//         {...req.body})
//         if(!product){
//             res.status(404).json({error : 'no product like this'})
//         }
//         res.status(200).json(product)
//  }




 module.exports = {createProduct,getProducts,deleteProduct};