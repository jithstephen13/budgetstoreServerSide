const { userModel } = require("../../Model/usermodel")
const bcrypt=require("bcrypt")
const Register=async(req,res)=>{
    const {name,email,password, gender,age,city}=req.body

     const alredy=await userModel.find({email})
     if(alredy.length<1){
        try {
            bcrypt.hash(password, 5, function(err, hash) {
               if(err){
                res.send({"mssg":"Error occure please try again"})
               }
               const user=new userModel({name,email,password:hash, gender,age,city})
               user.save()
               res.status(200).send({"mssg":"Signup succefully"})
            });  
            
        } catch (error) {
            res.status(400).send({"mssg":error.message})
            
        }


     }
     else{
        res.send({"mssg":"User already Exist"})
     }




}


module.exports={Register}