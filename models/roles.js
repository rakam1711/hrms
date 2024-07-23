const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
  roles: {
    type: String,
    enum: ["admin", "subAdmin", "Hr", "Employee"],
    default: "admin",
    required: true,
  },
});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
