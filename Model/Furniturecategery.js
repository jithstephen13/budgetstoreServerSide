
const mongoose=require("mongoose")

const FurnitureCategryschema=mongoose.Schema({
    backgroundImage:{ type:String, required: true },
    filterName:{ type: String, required: true }, 
    icons:{type:String}
})

const FurnitureCategryModel=mongoose.model("CategryFurniture",FurnitureCategryschema)

module.exports={FurnitureCategryModel}