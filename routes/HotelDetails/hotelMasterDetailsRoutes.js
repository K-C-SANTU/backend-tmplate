const express = require("express");

const router = express.Router();
const {
  create_master_details,
  all_master_details,
  update_master_details,
  delete_master_details,
} = require("../../controllers/HotelDetails/hotelMasterDetailsController");

router.route("/master_details/create").post(create_master_details);
router.route("/master/all_details").get(all_master_details)
router
  .route("/master/update/:id")
  .put(update_master_details)
  .delete(delete_master_details);


module.exports = router;
