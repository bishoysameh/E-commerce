const express = require ('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart')

require('dotenv').config()



//express app
const app = express();

//lsa  
  app.use(express.json());
//   app.use(express.Router());


//middleware
app.use((req,res,next)=>{
    console.log(req.path , req.method);
    next();
})

//routes
app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)
app.use('/api/cart' , cartRoutes)


 
 mongoose.set('strictQuery', false);
//conection to database

const dbURI = 'mongodb+srv://bishoy:test1234@nodetuts.7ydf7we.mongodb.net/Ecommerce?retryWrites=true&w=majority'
mongoose.connect(dbURI).then(()=>{
    //listening on port
    app.listen(4000 , ()=>{
        console.log("connected successfuly and app listen on port 4000");
    })
}).catch((error)=>{
    console.log(error + 'error in connection');
})

















