const express = require("express");

const router = express.Router();
const {
  create_user_details,
  all_user_details,
  update_user_details,
  delete_user_details,
} = require("../../controllers/user/hotelUserDeatilsController");

router.route("/user/create").post(create_user_details);
router.route("/user/all_details").get(all_user_details);
router
  .route("/user/update/:id")
  .put(update_user_details)
  .delete(delete_user_details);

module.exports = router;
