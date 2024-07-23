const express = require("express");
const employeeRoutes = express.Router();
const {
  addEmployee,
  employeeDetails,
  employeeUpdate,
  employeeDelete,
  employeeLogin,
} = require("../../controllers/admin/employee/adminEmployeeController");
const {
  listingContacts,
} = require("../../controllers/admin/contact/adminContactController");
const globlemiddleware = require("../../middlewares/globlemiddleware");

employeeRoutes.get("/employeeDetails/:id", employeeDetails);
employeeRoutes.get("/employeeList", listingContacts);

employeeRoutes.post("/addEmployee", addEmployee);
employeeRoutes.post("/loginEmployee", employeeLogin);

employeeRoutes.patch("/updateEmployee/:id", employeeUpdate);

employeeRoutes.delete("/deleteEmployee/:id", employeeDelete);

module.exports = employeeRoutes;
