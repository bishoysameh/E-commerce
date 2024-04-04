const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    camera: String,
    display: String,
    processor: String,
    battery: String,
},{ timestamps: true })

module.exports = mongoose.model('product', productSchema);