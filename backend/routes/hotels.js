const express = require("express");


// import
const { createNewHotels, getAllHotels,updateHotelsById,deleteHotelsById,gethotelByName } = require("../controllers/hotels");

//Create Roter
const hotelsRouter = express.Router();

hotelsRouter.post("/",createNewHotels)
hotelsRouter.get("/",getAllHotels)
hotelsRouter.get("/search_Name",gethotelByName)
hotelsRouter.put("/:id",updateHotelsById)
hotelsRouter.delete("/:id",deleteHotelsById)

module.exports=hotelsRouter