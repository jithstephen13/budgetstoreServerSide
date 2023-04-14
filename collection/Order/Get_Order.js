const { StripeModel } = require("../../Model/StripeModel");

const GetOrder=async(request,response)=>{
  
    try {
       let strip= await  StripeModel.find().sort( { date: -1 } )

       response.status(200).send(strip) 
    } catch (error) {
        response.send({ "Message": "Cannot able to get the Order data", "Error": error.message });
        
    }

}

module.exports={GetOrder}