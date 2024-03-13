// module.exports = (mongoose) => {
//   var schema = mongoose.Schema(
//     {
//       Hotel_code: {
//         type: String,
//         required: [true, "Please Enter The Hotel Code"],
//       },
//       plant_code: {
//         type: String,
//         required: [true, "Please Enter The Plant Code"],
//       },

//       Hotel_name: {
//         type: String,
//         required: [true, "Please Enter The Hotel Name"],
//         trim: true,
//       },
//       Hotel_sub_name: {
//         type: String,
//         default: null,
//       },
//       user_name: {
//         type: String,
//         required: [true, "Please Enter The User Name"],
//       },

//       mobile_no: {
//         type: String,
//         required: [true, "Please Enter The Mobile Number"],
//         unique: true,
//       },
//       email: {
//         type: String,
//         minlength: 10,
//         maxlength: 44,
//         lowercase: true,
//         validate: [
//           /^\w+([\.-]?\w+)*(\+\w*)?@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//           "please provide a valid email",
//         ],
//         required: true,
//       },
//       Address: {
//         type: String,
//         required: [true, "Please Enter The Address"],
//       },
//       active_status: {
//         type: Number,
//         enum: [0, 1],
//         default: 1,
//       },
//     },
//     { timestamps: true }
//   );
  
//   const Tutorial = mongoose.model("User_Details", schema);
//   return Tutorial;
// };
