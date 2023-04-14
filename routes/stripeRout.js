require("dotenv").config()
const express = require('express');
const { StripeModel } = require("../Model/StripeModel");





const stripe = require('stripe')(process.env.STRIPE_KEY)
const stripeRout = express.Router()
 
let tempData ;
stripeRout.post('/create-checkout-session', async (req, res) => {
  
 
    try {

          // creating customer and we passing userId also and it using to create an metta data for web hook
        const customer = await stripe.customers.create({
          metadata:{
            userId:req.body.user_id,
          }
        })
        
       
               //creating an array of object for the billing item  that will  additionally adding and change the objectect new key values
        tempData=req.body.Carts
        const line_items=req.body.Carts.map((item)=>{
              
          return{
            price_data: {
              currency: 'inr',
              product_data: {
                name: item.name,
               
                metadata:{
                  id:item._id
                }
              },
              unit_amount: item.minRentAmount*100,
            },
            quantity: item.quentity,
          }
        });

      
          const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            shipping_address_collection: {allowed_countries: ['IN']},
            shipping_options: [
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {amount: 0, currency: 'inr'},
                  display_name: 'Free shipping',
                  delivery_estimate: {
                    minimum: {unit: 'business_day', value: 3},
                    maximum: {unit: 'business_day', value: 5},
                  },
                },
              },
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {amount: 1500, currency: 'inr'},
                  display_name: 'Fast shipping',
                  delivery_estimate: {
                    minimum: {unit: 'business_day', value: 1},
                    maximum: {unit: 'business_day', value: 2},
                  },
                },
              },
            ],
            phone_number_collection:{
              enabled:true
            },
            line_items,
            customer:customer.id,
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/checkout-success`,
            cancel_url: `${process.env.CLIENT_URL}/error`,
          });
        
          const newOrder = new StripeModel({
            userId: req.body.user_id,
            customerId: session.customer,
            paymentIntentId:req.body.IP,
            products:tempData,
            subtotal: session.amount_subtotal/100,
            total: session.amount_total/100,
            shipping: "Fast shipping",
            payment_status:"success",
            shipping_cost: session.shipping_cost.amount_total/100,
            transaction_status: session.status,
            date:new Date,
          });
          const savedOrder = await newOrder.save();
              // we are only semding the session url it will help to redairect to  the stripe payment page

          res.send(JSON.stringify({url:session.url}));

      } catch (error) {
        console.log(error)
        res.status(400).json({error:'error in session creation'})
      }
     
      });









//
// handle webhook events in your integration.




// This is your Stripe CLI webhook secret for testing your endpoint locally.
// let endpointSecret =process.env.END_POINT_SECRET

// const endpointSecret = "whsec_0643afcba9c0a26d480cd584eb055efc9e40f828b5a80f1c9fecb8aa929ba2f8";

// stripeRout.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (err) {
//     console.log(err)
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }

  // Handle the event
  // switch (event.type) {
  //   case 'payment_intent.succeeded':
  //     const paymentIntentSucceeded = event.data.object;
  //     // Then define and call a function to handle the event payment_intent.succeeded
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  // Return a 200 response to acknowledge receipt of the event
//   response.send().end();
// });






      
  module.exports ={stripeRout}