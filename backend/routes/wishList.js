const express=require("express")

//controllers
const {addToWishList,GetMyWishList}=require("../controllers/wishList");
const authentication = require("../middlewares/authentication");

const wishListRouter=express.Router()
wishListRouter.post("/:id",authentication,addToWishList)
wishListRouter.get("/",authentication,GetMyWishList)

module.exports=wishListRouter