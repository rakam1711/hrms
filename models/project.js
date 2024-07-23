const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
  projectName: { type: String, required: true },
  projectHead: { type: String, required: true },
});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
