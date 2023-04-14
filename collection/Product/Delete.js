const { ProductMode } = require("../../Model/product")
           //product are deleating based in the passing id
const DeleteProduct =async(request,response)=>{
    let id=request.params.id

    try {
        await ProductMode.findByIdAndDelete({_id:id})

        response.status(200).send({"Message":"item Removed SucessFully From Store"})
    } catch (error) {
        response.status(404).send({"Message":"Failed"})
    }

}


module.exports={DeleteProduct}