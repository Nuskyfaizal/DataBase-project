const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        length:4
    },
    name:{
        type: String,
        required: true,
        trim:true
    },
    description:{
        type:String
    },
    purchasedQty:{
        type: Number,
        required:true
    },
    soldQty:{
        type:Number,
        required:true
    },
    availableQty:{
        type:Number,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    costPrice:{
        type:Number,
        required:true
    },
    sellingPrice:{
        type:Number,
        required:true
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product }