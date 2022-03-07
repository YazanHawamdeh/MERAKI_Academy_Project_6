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
// const loginRouter = require("./routes/roles");
// const usersRouter = require("./routes/roles");
// const hotelsRouter = require("./routes/roles");
// const citiesRouter = require("./routes/roles");

// router middleware
app.use("/roles", rolesRouter);
// app.use("/login", loginRouter);
// app.use("/users", usersRouter);
// app.use("/hotels", hotelsRouter);
// app.use("/cities", citiesRouter);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
