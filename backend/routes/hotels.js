const express = require("express");


// import
const { createNewHotels, getAllHotels,updateHotelsById,deleteHotelsById,gethotelByName,gethotelById,gethotelsBycity } = require("../controllers/hotels");

//Create Roter
const hotelsRouter = express.Router();

hotelsRouter.post("/",createNewHotels)
hotelsRouter.get("/",getAllHotels)
hotelsRouter.get("/search_Name",gethotelByName)
hotelsRouter.get("/search_id/:id",gethotelById)
hotelsRouter.get("/search_city/:name",gethotelsBycity)
hotelsRouter.put("/:id",updateHotelsById)
hotelsRouter.delete("/:id",deleteHotelsById)

module.exports=hotelsRouter