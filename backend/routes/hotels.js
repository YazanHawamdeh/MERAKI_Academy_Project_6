const express = require("express");


// import
const { createNewHotels, getAllHotels,updateHotelsById,deleteHotelsById } = require("../controllers/hotels");

//Create Roter
const hotelsRouter = express.Router();

hotelsRouter.post("/",createNewHotels)
hotelsRouter.get("/",getAllHotels)
hotelsRouter.put("/:id",updateHotelsById)
hotelsRouter.delete("/:id",deleteHotelsById)

module.exports=hotelsRouter