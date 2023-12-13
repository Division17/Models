import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true,
    },
     price:{
        types: Number,
        required: true,
        default: 0,
     },

     stock:{
        types: Number,
        required: true,
        default: 0,
     },

     productImage:{
     type: String,

     },

    category:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"Category",
         required: true,
            },
     owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
           },
     }       

,{timestamps:true});

export const Product = mongoose.model('Product', productSchema );