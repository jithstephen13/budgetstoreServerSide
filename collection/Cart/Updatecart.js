const { CartModel } = require("../../Model/cart")

const Updatecart=async(request,response)=>{
    let Update=request.body
    let id=request.params.id
    console.log(Update,id)
    try {

        await CartModel.findByIdAndUpdate({_id:id},Update)
        response.send({ "Message": `Item of id: ${id} is successfully updated ` });
    } catch (error) {
        response.send({ "Message": "Cannot able to update the data", "Error": error.message });
    }

}

module.exports={Updatecart}