let mongoose=require('mongoose');
let ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        default:'this is the description of product'
    },
    category:{
        type:String,
        enum:['fashion','men','women','festive'],
        default:'fashion'
    },
    createdAt:{
        type:Date,
        delete:Date.now
    }
})
module.exports=mongoose.model('products',ProductSchema);