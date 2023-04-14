

 const Getuser = async(req,res) => {
    const id=req.body
    let user=await userModel.find({_id:id})

    res.send({user})
  
}


module.exports={Getuser}