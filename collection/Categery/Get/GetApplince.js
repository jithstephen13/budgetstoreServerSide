const { AppliancesCategryModel } = require("../../../Model/Appliancescategery")

const GetAplinces = async(req,res)=>{

    try {
           const Ap= await AppliancesCategryModel.find()
    res.status(200).send({data:Ap})
    } catch (error) {
        res.status(404).send({"Message":"Some thing went wrong"})

        
    }
 
    
}

// const apllince = require('../../../Assetes/applince.json');
// const insertproduct = async () => {
//     try {
//         const docs = await AppliancesCategryModel.insertMany(apllince);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };


// insertproduct()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))


module.exports={GetAplinces}

