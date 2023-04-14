const { ProductMode } = require("../../Model/product")


const UpdateProduct =async(request,response)=>{
    let updatedata=request.body
    let id=request.params.id
    console.log(updatedata,id)

    try {
        await ProductMode.findByIdAndUpdate({_id:id},updatedata)
        response.send({ "Message": `Item of id: ${id} is successfully updated ` });
    } catch (error) {
        response.send({ "Message": "Cannot able to update the data", "Error": error.message });
 
    }

}

module.exports={UpdateProduct}