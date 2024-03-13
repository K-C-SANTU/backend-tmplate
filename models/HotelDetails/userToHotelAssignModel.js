module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    ID: {
      type: String,
      required: [true, "Please enter The ID"],
    },
    user_id: {
      type: String,
      required: [true, "Please Enter The Hotel Code"],
    },
    hotel_id: {
      type: String,
      required: [true, "Please Enter Hotel ID"],
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
  });
};
