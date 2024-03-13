const express = require("express");

const router = express.Router();

const {
  register_user,
  login_user,
} = require("../../controllers/user/userController");

// router.route("/admin/users").get(get_all_users);

router.route("/register").post(register_user);
router.route("/login").post(login_user);

module.exports = router;
