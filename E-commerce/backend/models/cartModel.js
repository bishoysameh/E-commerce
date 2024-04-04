const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    productTybe : {
        type : String,
        required: true
    },
    productName :{
        type : String,
        required: true

    },
    productPrice:{
        type : Number,
        required: true

    },
    productDetails:{
        type : String,
        required: true

    },

    productPhoto:{
        type : String,
        required:true
    },

    user_id:{
        type:String
    },
    camera: String,
    display: String,
    processor: String,
    battery: String,
},{ timestamps: true })

module.exports = mongoose.model('cart', cartSchema);