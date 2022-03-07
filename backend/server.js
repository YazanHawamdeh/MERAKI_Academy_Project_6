const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db/db");




//routers


const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());

//importing routers
const rolesRouter = require("./routes/roles");

// router middleware
app.use("/roles", rolesRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
