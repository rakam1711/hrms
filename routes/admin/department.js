const express = require("express");
const departmentRoutes = express.Router();
const departmentController = require("../../controllers/admin/departments/adminDepartmentController");
const globlemiddleware = require("../../middlewares/globlemiddleware");

departmentRoutes.get(
  "/departmentDetails/:id",
  departmentController.departmentDetails
);

departmentRoutes.post(
  "/addDepartment",
  globlemiddleware.authenticate,
  departmentController.addDepartment
);

departmentRoutes.patch(
  "/updateDepartment/:id",
  departmentController.departmentUpdate
);

departmentRoutes.delete(
  "/deleteDepartment/:id",
  departmentController.departmentDelete
);

module.exports = departmentRoutes;
