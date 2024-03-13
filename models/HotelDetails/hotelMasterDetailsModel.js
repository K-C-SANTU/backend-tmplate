module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      hotel_id: {
        type: String,
        required: [true, "Please Enter Hotel ID"],
        unique: true,
      },
      hotel_name: {
        type: String,
        required: [true, "Please Enter Hotel Name"],
      },
      hotel_address: {
        type: String,
        required: [true, "Please Enter Hotel Address"],
      },
      is_active: {
        type: Number,
        default: 0,
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

  // schema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

  const Tutorial = mongoose.model("hotel_master_details", schema);
  return Tutorial;
};
