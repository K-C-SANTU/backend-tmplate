module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      item_id: {
        type: String,
        required: [true, "Please Enter Item Name"],
        unique: true,
      },
      item_name: {
        type: String,
        required: [true, "Please Enter Item Name"],
      },
      price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
      },
      is_sub_items: {
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

  const Tutorial = mongoose.model("item_details", schema);
  return Tutorial;
};
