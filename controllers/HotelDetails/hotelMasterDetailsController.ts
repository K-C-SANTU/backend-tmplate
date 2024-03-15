import { Response, Request } from "express";

const db = require("../../models/index.js");
const ErrorModule = require("../../utils/errorHander");
const ResponseHandler = require("../../utils/responseHandler");
const Master = db.Hotel_master_details;

//get all master details
exports.all_master_details = async (req:Request, res:Response) => {
  try {
    const result = await Master.find();
    ResponseHandler.Response(res, "Available Data", 200, result);
  } catch (error:any) {
    ErrorModule.Response(res, error.message, 500);
  }
};

//create master details
exports.create_master_details = async (req:Request, res:Response) => {
  try {
    const { hotel_id, hotel_name, hotel_address }:any = req.body;
    if (!(hotel_id && hotel_name && hotel_address)) {
      ErrorModule.Response(res, "Missing Parameters", 404);
    }
    const result = await Master.create(req.body);
    ResponseHandler.Response(res, "Data Inserted Successfully", 200, result);
  } catch (error:any) {
    ErrorModule.Response(res, error.message, 500);
  }
};

//update the master data
exports.update_master_details = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const Exist_user = await Master.findById(id);
    if (!Exist_user) {
      ErrorModule.Response(res, "Data not found", 404);
    }

    const result = await Master.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    ResponseHandler.Response(res, "Data Updated Successfully", 200, result);
  } catch (error:any) {
    ErrorModule.Response(res, error.message, 200);
  }
};

//Delete the master data
exports.delete_master_details = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const Exist_user = await Master.findById(id);
    if (!Exist_user) {
      ErrorModule.Response(res, "Data not found", 404);
    }

    await Exist_user.deleteOne();
    ResponseHandler.Response(res, "Data Deleted Successfully", 200);
  } catch (error:any) {
    ErrorModule.Response(res, error.message, 200);
  }
};
