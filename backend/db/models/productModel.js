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
    },
    soldQty:{
        type:Number,
    },
    availableQty:{
        type:Number,
    },
    supplier:{
        type:String,
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