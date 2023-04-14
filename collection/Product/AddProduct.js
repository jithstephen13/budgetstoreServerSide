// const { ProductMode } = require('../../Model/product');
// const product = require('../../Assetes/product.json');
// const insertproduct = async () => {
//     try {
//         const docs = await ProductMode.insertMany(product);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

const { ProductMode } = require("../../Model/product")

// insertproduct()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))


const Addproduct=async(request,response)=>{

    let products=request.body
    
   
     try {

        let product=new ProductMode(products)
       
    
         await product.save()
         console.log(product)
         response.status(200).send({ "Message": "Item Successfully Added !" })
        
        
    } catch (error) {
        console.log(error)
        response.status(404).send({ "Message": error.message })
        
    }

}

module.exports={Addproduct}
