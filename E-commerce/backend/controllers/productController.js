const Product = require ('../models/productModel.js');
const mongoose = require('mongoose');





//get all products
const getProducts = (async (req,res)=>{
    const product = await Product.find({}).sort({createdAt:-1})
    res.status(200).json(product);
})




//get a single product
const getProduct = (async (req,res)=>{

// destructure the id property from the param object
    const {id} = req.params ; 

    //chech if type of id is valid by mongoose
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error : 'no product like this'})
    }
    const product = await Product.findById(id)
    if(!product){
        res.status(404).json({error : 'no product like this'});
    }
    res.status(200).json(product)
})



//create new product
const createProduct = (  async (req,res)=>{
    const  { productTybe, productName , productPrice , productDetails , productPhoto} = req.body;

    try {
       const product = await Product.create({productTybe , productName ,productPrice , productDetails ,productPhoto})
       res.status(200).json(product)
     } catch (error) {
       res.status(400).json({error: error.message})
     }
 //  res.json({msg:'post a new workout'});
 });



 //delete a product
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
 const updateProduct = async(req,res)=>{
    const {id} = req.params ; 
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error : 'no product like thissss'})
    }
     const product = await Product.findByIdAndUpdate({_id:id},
        {...req.body})
        if(!product){
            res.status(404).json({error : 'no product like this'})
        }
        res.status(200).json(product)
 }




 module.exports = {createProduct,getProducts,getProduct,deleteProduct,updateProduct};