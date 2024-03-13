const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

// db.products = require("./products/itemsModel")(mongoose);
db.user = require("./users/hotelUserDeatilsModel")(mongoose);
db.Hotel_master_details = require("./HotelDetails/hotelMasterDetailsModel")(mongoose);



module.exports = db;

