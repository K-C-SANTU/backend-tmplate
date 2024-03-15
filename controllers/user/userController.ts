import { Response, Request, NextFunction } from "express";

const ErrorHander = require("../utils/errorhander");

const db = require("../../models/index.js");
const User = db.users;
// const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");

// Register a User
exports.registerUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { Hotel_code, email } = req.body;
    let user_details;
    const Existing_user = User.findOne({ email, Hotel_code });

    if (Existing_user) {
      return next(new ErrorHander("This email already register", 404));
    } else {
      user_details = await User.create(req.body);
    }
    // sendToken(user, 201, res);
    res.status(200).send({
      status_code: 200,
      message: "Data inserted successfully",
      data: user_details,
    });
  } catch (error) {
    res.status(500).send({
      status_code: 500,
      message: "internal server error",
    });
  }
};
