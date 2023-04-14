const mongoose=require("mongoose")

const PackageCategryschema=mongoose.Schema({
    backgroundImage:{ type:String, required: true },
    filterName:{ type: String, required: true }, 
    icons: {type:String}
})

const PackageCategryModel=mongoose.model("CategryPackage",PackageCategryschema)

module.exports={PackageCategryModel}