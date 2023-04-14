const mongoose=require("mongoose")

const AppliancesCategryschema=mongoose.Schema({
    backgroundImage:{ type:String, required: true },
    filterName:{ type: String, required: true }, 
    icons:{type:String}
})

const AppliancesCategryModel=mongoose.model("CategryAppliance",AppliancesCategryschema)

module.exports={AppliancesCategryModel}