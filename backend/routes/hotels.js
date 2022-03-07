const express = require("express");


// import
const { createNewHotels, getAllHotels } = require("../controllers/hotels");

//Create Roter
const hotelsRouter = express.Router();

hotelsRouter.post("/",createNewHotels)
hotelsRouter.get("/",getAllHotels)

module.exports=hotelsRouter