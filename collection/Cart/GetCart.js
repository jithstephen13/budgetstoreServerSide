const { CartModel } = require("../../Model/cart")

const GetCart=async(request,response)=>{
    let id=request.body.user_id
  
    try {
       let cart= await CartModel.find({user_id:id})
       response.status(200).send(cart) 
    } catch (error) {
        response.send({ "Message": "Cannot able to get the cart data", "Error": error.message });
        
    }

}

module.exports={GetCart}