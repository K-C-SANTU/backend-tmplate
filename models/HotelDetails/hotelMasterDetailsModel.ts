const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const BlogPost = new Schema({
    hotel_id: ObjectId,
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
  { timestamps: true });

  const MyModel = BlogPost.model('hotel_master_details');
module.exports = MyModel
