module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      user_id: {
        type: String,
        required: [true, "Please Enter The Hotel Code"],
      },
      user_name: {
        type: String,
        required: [true, "Please Enter The User Name"],
      },
      mobile_no: {
        type: String,
        required: [true, "Please Enter The Mobile Number"],
        unique: true,
      },
      email: {
        type: String,
        lowercase: true,
        validate: [
          /^\w+([\.-]?\w+)*(\+\w*)?@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "please provide a valid email",
        ],
        required: true,
      },
      is_user_email_verified: {
        type: Boolean,
        default: false,
      },
      is_active: {
        type: Number,
        default: 1,
        enum: [0, 1],
      },
      created_by: {
        type: String,
        default: null,
      },
      updated_by: {
        type: String,
        default: null,
      },
    },
    { timestamps: true }
  );

  const Tutorial = mongoose.model("User_Details", schema);
  return Tutorial;
};
