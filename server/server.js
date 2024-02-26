//in-built and installed packages
const express = require("express");
require("dotenv").config();
require("ejs");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const uploads = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png") {
      cb(null, true);
    } else cb(new Error("only jpeg images allowed"), false);
  },
});

//api
//requests
app.use("/user", uploads.single("imageUrl"), userRoutes);

//server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
