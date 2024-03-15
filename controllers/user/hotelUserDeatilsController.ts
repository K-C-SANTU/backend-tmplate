import { Response, Request } from "express";

const db = require("../../models/index.js");
const ResponseHandler = require("../../utils/responseHandler");
const ErrorHandler = require("../../utils/errorHander");
const User = db.user;


//get all User details
exports.all_user_details = async (req:Request, res: Response) => {
  try {
    const result = await User.find();
    ResponseHandler.Response(res, "Available Data", 200, result);
  } catch (error:any) {
    ErrorHandler.Response(res, error.message, 500);
  }
};

//create User details
exports.create_user_details = async (req:Request, res: Response) => {
  try {
    const { user_id, user_name, mobile_no, email } = req.body;

    if (!(user_id && user_name && mobile_no && email)) {
      ErrorHandler.Response(res, "Missing Parameters");
    }
    const result = await User.create(req.body);
    ResponseHandler.Response(res, "Data Inserted Successfully", 200, result);
  } catch (error:any) {
    ErrorHandler.Response(res, error.message, 500);
  }
};

//update the User data
exports.update_user_details = async (req:Request, res: Response) => {
  try {
    const id = req.params.id;

    const Exist_user = await User.findById(id);
    if (!Exist_user) {
      ErrorHandler.Response(res, "Data not found", 404);
    }

    const result = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    ResponseHandler.Response(res, "Data Updated Successfully", 200, result);
  } catch (error:any) {
    ErrorHandler.Response(res, error.message, 200);
  }
};

//Delete the User data
exports.delete_user_details = async (req:Request, res: Response) => {
  try {
    const id = req.params.id;

    const Exist_user = await User.findById(id);
    if (!Exist_user) {
      ErrorHandler.Response(res, "Data not found", 404);
    }

    await Exist_user.deleteOne();
    ResponseHandler.Response(res, "Data Deleted Successfully", 200);
  } catch (error:any) {
    ErrorHandler.Response(res, error.message, 200);
  }
};
