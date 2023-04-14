const { StripeModel } = require("../../Model/StripeModel")

const UpdateOrder=async(request,response)=>{
    let Update=request.body
    let id=request.params.id

    try {

        await StripeModel.findByIdAndUpdate({_id:id},Update)
        response.send({ "Message": `Item of id: ${id} is successfully updated ` });
    } catch (error) {
        response.send({ "Message": "Cannot able to update the data", "Error": error.message });
    }

}

module.exports={UpdateOrder}