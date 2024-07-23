const express = require("express");
const projectRoutes = express.Router();
const projectController = require("../../controllers/admin/projects/adminProjectController");
const globlemiddleware = require("../../middlewares/globlemiddleware");

projectRoutes.get("/departmentDetails/:id", projectController.projectDetails);

projectRoutes.post(
  "/addDepartment",
  globlemiddleware.authenticate,
  projectController.addProject
);

projectRoutes.patch("/updateDepartment/:id", projectController.projectUpdate);

projectRoutes.delete("/deleteDepartment/:id", projectController.projectDelete);

function putRoutes() {}

module.exports = projectRoutes;
