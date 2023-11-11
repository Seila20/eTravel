const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const staticPath = __dirname + "/public";
const routesPath = __dirname + "/routes";

const homeRouter = require(routesPath + "/home.js");
const packageRouter = require(routesPath + "/package.js");
const managementRouter = require(routesPath + "/management.js");
const offerRouter = require(routesPath + "/offer.js");
const addRouter = require(routesPath + "/addpackage.js");
const editRouter = require(routesPath + "/editpackage.js");
const deleteRouter = require(routesPath + "/deletepackage.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 5000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", homeRouter);
app.use("/package", packageRouter);
app.use("/management", managementRouter);
app.use("/offer", offerRouter);
app.use("/addpackage", addRouter);
app.use("/editpackage", editRouter);
app.use("/deletepackage", deleteRouter);

app.use(express.static(staticPath));
app.use(router);
app.use(helmet());

mongoose.connect(process.env.URL_PATH);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

module.exports = router;
