const mongoose =require('mongoose')

const product = mongoose.Schema({
    name:{
        type:String,
        required: true

    },
    price :{
        type:Number,
        required: true

    },
    quantity:{
        type:Number,
        required: true
    },
    Status :{
        type:String,
        enum:["In stock", "out of stock"],
        default:"In stock"
    }

})
const productSchema = mongoose.model("product", product)
module.exports = productSchema