const db = require("../../models/index.js");
const { Response } = require("../../utils/responseHandler.js");
const User = db.user;


//get all User details
exports.all_user_details = async (req, res) => {
  try {
    const result = await User.find();
    Response(res, "Available Data", 200, result);
  } catch (error) {
    Response(res, error.message, 500);
  }
};

//create User details
exports.create_user_details = async (req, res) => {
  try {
    const { user_id, user_name, mobile_no, email } = req.body;

    if (!(user_id && user_name && mobile_no && email)) {
      Response(res, "Missing Parameters");
    }
    const result = await User.create(req.body);
    Response(res, "Data Inserted Successfully", 200, result);
  } catch (error) {
    Response(res, error.message, 500);
  }
};

//update the User data
exports.update_user_details = async (req, res) => {
  try {
    const id = req.params.id;

    const Exist_user = await User.findById(id);
    if (!Exist_user) {
      return Response(res, "Data not found", 404);
    }

    const result = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    Response(res, "Data Updated Successfully", 200, result);
  } catch (error) {
    Response(res, error.message, 200);
  }
};

//Delete the User data
exports.delete_user_details = async (req, res) => {
  try {
    const id = req.params.id;

    const Exist_user = await User.findById(id);
    if (!Exist_user) {
      return Response(res, "Data not found", 404);
    }

    await Exist_user.deleteOne();
    Response(res, "Data Deleted Successfully", 200);
  } catch (error) {
    Response(res, error.message, 200);
  }
};
