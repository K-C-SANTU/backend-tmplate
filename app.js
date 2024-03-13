const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


//  Routes
// const product = require("./routes/products/productRoutes.js");
const hotel_details = require("./routes/HotelDetails/hotelMasterDetailsRoutes.js");
const user = require("./routes/user/hotelUserDeatilsRoutes.js")


// app.use("/api/v1", product);
app.use("/api/v1", hotel_details);
app.use("/api/v1", user);

module.exports = app;

