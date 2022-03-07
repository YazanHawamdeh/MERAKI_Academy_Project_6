const express = require("express");
const { model } = require("mongoose");

// import
const { createNewHotels } = require("../controllers/hotels");

//Create Roter
const hotelsRouter = express.Router();

hotelsRouter.post("/",createNewHotels)

module.exports=hotelsRouter