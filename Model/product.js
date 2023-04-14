
const mongoose=require("mongoose")

const Productschema=mongoose.Schema({
    id:{ type:Number, required: true },
    slug:{ type: String, required: true }, 
    name:{ type: String, required: true },
    minRentAmount:{ type: Number, required: true },   
    categorySlug:{ type: String, required: true },
    filterSlug:{ type: String, required: true },
    productImages:{ type: String, required: true },
})

const ProductMode=mongoose.model("product",Productschema)

module.exports={ProductMode}