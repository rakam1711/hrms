const Mongoose = require("mongoose");

const adminSchema = new Mongoose.Schema({
  employeeId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ["Admin", "SubAdmin", "Hr", "Employee"],
    default: "Admin",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});
const Admin = Mongoose.model("Admin", adminSchema);
module.exports = Admin;
