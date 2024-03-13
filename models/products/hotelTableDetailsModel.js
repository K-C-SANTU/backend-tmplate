module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    table_id: {
      type: String,
      required: [true, "Please enter Table ID"],
    },
    hotel_id: {
      type: String,
      required: [true, "Please Enter Hotel ID"],
    },
    number_of_seats: {
      type: Number,
      required: [true, "Please Enter Number of Seats"],
    },
    live_sync_up_item: {
      type: Boolean,
      default: false,
    },
    is_QR_code_order_enable:{
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
  });
};
