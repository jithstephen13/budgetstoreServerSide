const { FurnitureCategryModel } = require("../../../Model/Furniturecategery")

const GetFurniture= async(req,res)=>{
    try {
        const Ap= await FurnitureCategryModel.find()
        res.status(200).send({data:Ap})
 } catch (error) {
     res.status(404).send({"Message":"Some thing went wrong"})

     
 }
    
}

// const furniture = require('../../../Assetes/furniture.json');
// const insertproduct = async () => {
//     try {
//         const docs = await FurnitureCategryModel.insertMany(furniture);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };


// insertproduct()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))


module.exports={GetFurniture}