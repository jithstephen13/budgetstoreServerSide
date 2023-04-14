const { CartModel } = require("../../Model/cart");

const Deletecart=async(request,response)=>{
    let id=request.params.id
   
    try {
        await CartModel.findByIdAndDelete({_id:id})
        response.send({ "Message": `Cart Item of id: ${id} is successfully deleted from cart` });
    } catch (error) {
        response.send({ "Message": "Cannot able to get the cart data", "Error": error.message });
    }

}

const DeletecarMany=async(request,response)=>{
    let id=request.params.id
   
    try {
        await CartModel.deleteMany({"user_id":id})
        response.send({ "Message": `Cart Item of id: ${id} is successfully deleted from cart` });
    } catch (error) {
        response.send({ "Message": "Cannot able to get the cart data", "Error": error.message });
    }

}

module.exports={Deletecart,DeletecarMany}