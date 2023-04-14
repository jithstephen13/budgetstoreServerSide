require("dotenv").config()
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const { connection } = require("./configs/db")
const { Allroutes } = require("./routes/routes")
const { uploadImage } = require("./collection/uploadImage")
const { authenticate } = require("./middlewares/authmidileware")
const { stripeRout } = require("./routes/stripeRout")
const { ipMiddleware } = require("./middlewares/IpMidd")

const app=express()


app.use(express.json({limit: '50mb'}))
app.use(cors())

app.use("/stripe",authenticate,stripeRout)
app.use("/",Allroutes)

app.post("/uploadImg",(req,res)=>{
    uploadImage(req.body.image)
    .then((url)=>res.send(url))
    .catch((err) => res.status(500).send(err));
})







app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`Server is running at port ${process.env.PORT}`); 
    } catch (error) {

        console.log("Cannot able to start the server", "Error: ",error);

        
    }

})




