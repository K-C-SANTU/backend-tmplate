module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      item_id: {
        type: String,
        required: [true, "Please Enter Item ID"],
        unique: true,
      },
      item_sub_id: {
        type: String,
        required: [true, "Please Enter Item Sub ID"],
      },
      item_total_qty: {
        type: Number,
        required: [true, "Please Enter Item Total Quantity"],
      },
      item_qty_id: {
        type: String,
        required: [true, "Please Enter Item Quantity ID"],
      },
      sub_item_category: [{ type: Array }],
      quantity: {
        type: String,
        required: [true, "Please Enter Quantity"],
      },
      buffer_quantity: {
        type: String,
        required: [true, "Please Enter Buffer Quantity "],
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
