const express= require("express")
const { home } = require("../collection/home")
const { login } = require("../collection/users/login")
const { Register } = require("../collection/users/Register")

const {Getproduct} =require("../collection/Product/GetProduct")
                                        //add Product
const { Addproduct } = require("../collection/Product/AddProduct")
const { UpdateProduct } = require("../collection/Product/Update")
const { DeleteProduct } = require("../collection/Product/Delete")

                  //categery furniture
const { GetFurniture } = require("../collection/Categery/Get/GetFurnitures")
const { GetAplinces } = require("../collection/Categery/Get/GetApplince")
const { GetPackeges } = require("../collection/Categery/Get/GetPackeges")
     
                // cart
const { GetCart } = require("../collection/Cart/GetCart")
const { AddtoCart } = require("../collection/Cart/AddtoCart")
const { Updatecart } = require("../collection/Cart/Updatecart")
const { Deletecart, DeletecarMany } = require("../collection/Cart/Deletecart")

                    //midleware
const { authenticate } = require("../middlewares/authmidileware")
const { GetOrder } = require("../collection/Order/Get_Order")
const { UpdateOrder } = require("../collection/Order/Update_Order")
const { Getuser } = require("../collection/users/Getuser")


const Allroutes=express.Router()

 Allroutes.get("/",home)

//  userLogin

Allroutes.post("/sigin",Register)
Allroutes.post("/login",login)
Allroutes.get("/user",Getuser)

//Productes
Allroutes.get("/Productes/Product" ,Getproduct)
Allroutes.post("/Productes/product",Addproduct)
Allroutes.patch("/Productes/product/:id",UpdateProduct)
Allroutes.delete("/Productes/product/:id",DeleteProduct)


//categery

Allroutes.get("/categery/furnitur",GetFurniture)
Allroutes.get("/categery/Aplinces",GetAplinces)
Allroutes.get("/categery/Packeges",GetPackeges)

//cart operations

Allroutes.get("/cart/cart",authenticate,GetCart)
Allroutes.post("/cart/cart",authenticate,AddtoCart)
Allroutes.patch("/cart/cart/:id",authenticate,Updatecart)
Allroutes.delete("/cart/cart/:id",authenticate,Deletecart)
Allroutes.delete("/cart/cartMany/:id",authenticate,DeletecarMany)

Allroutes.get("/order/Order",GetOrder)
Allroutes.patch("/order/Order/:id",UpdateOrder)


















module.exports={Allroutes}