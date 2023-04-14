const mongoose = require('mongoose');

const StripeSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    customerId:{type:String},
    paymentIntentId:{type:String},
    products:{type:Array},
    subtotal:{type:Number,required:true},
    total:{type:Number,required:true},
    shipping:{type:Object,required:true},
    delivery_status:{type:String,default:'pending'},
    transaction_status:{type:String,default:'null'},
    payment_status:{type:String,required:true},
    shipping_cost:{type:String},
    date:{type:String}
},{
    timestamps:true
})
const StripeModel = mongoose.model('Stripe',StripeSchema)
module.exports={
    StripeModel
}