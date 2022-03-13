const express = require(`express`)
const {createNewRating} =require('../controllers/rating')
const authentication = require("../middlewares/authentication");
const ratingsRouter=express.Router()

ratingsRouter.post("/:id",authentication,createNewRating)

module.exports=ratingsRouter