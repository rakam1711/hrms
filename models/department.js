const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
  departmentName: { type: String, required: true },
  departmentHead: { type: String, required: true },
  place: { type: String },
  email: { type: String, lowercase: true },
});
const Department = mongoose.model("department", departmentSchema);

module.exports = Department;
