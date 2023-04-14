const { PackageCategryModel } = require("../../../Model/PackagesCategry")

const GetPackeges = async(req,res)=>{
    try {
        const Ap= await PackageCategryModel.find()
        res.status(200).send({data:Ap})
 } catch (error) {
     res.status(404).send({"Message":"Some thing went wrong"})

     
 }

}


// const packege = require('../../../Assetes/packege.json');
// const insertproduct = async () => {
//     try {
//         const docs = await PackageCategryModel.insertMany(packege);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };


// insertproduct()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports={GetPackeges}