//in-built and installed packages
const express = require("express");
require("dotenv").config();
require("ejs");
const cors = require("cors");
const path = require("path");

//user defined files
require("./utils/db");
const ApiRoutes = require("./utils/api");
const userRoutes = require("./routes/UserRoutes");

//configs
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.set("view engiene", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//api
//requests
app.use("/user", userRoutes);

//server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
