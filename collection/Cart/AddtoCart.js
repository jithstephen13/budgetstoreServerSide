const { CartModel } = require("../../Model/cart")

const AddtoCart=async(request,response)=>{
    let data=request.body
    let id=request.body.user_id
    let cart= await CartModel.find({user_id:id})
    let exisst=cart.filter((item)=>item.product_id==data.product_id)

   if(exisst.length<=0){
     try {
      let cat= new CartModel(data)
        await cat.save()
        response.send({ "Message": "Item Successfully Added Into The Cart!" });
        
    } catch (error) {
        response.send({ "Message": "Cannot able to add the data to cart", "Error": error.message });
        
    }
   }
   else{
    response.send({ "Message": "item already in the Cart",});
   }
    
   

}

module.exports={AddtoCart}