const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

//create student schema and model
const StudentSchema = new Schema({
  _id: { type: objectId, auto: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  date_joined: { type: Date, default: Date.now },
  sex: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  level: { type: Number, required: false }
});

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;
