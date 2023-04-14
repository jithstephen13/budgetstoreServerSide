const mongoose=require("mongoose")

const Cartschema=mongoose.Schema({
    user_id:{ type: String, required: true },
    product_id: { type: String, required: true },
    name:{ type: String, required: true },
    minRentAmount:{ type: Number, required: true },   
    categorySlug:{ type: String, required: true },
    filterSlug:{ type: String, required: true },
    productImages:{ type: String, required: true },
    quentity:{ type: Number, required: true }, 
})

const CartModel=mongoose.model("cart",Cartschema)

module.exports={CartModel}
