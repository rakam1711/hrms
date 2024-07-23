const express = require("express");
const attendenceRoutes = express.Router();
const attendenceController = require("../../controllers/admin/attendence/adminAttendenceController");
const globlemiddleware = require("../../middlewares/globlemiddleware");

attendenceRoutes.post(
  "/addAttendence",
  globlemiddleware.authenticate,
  attendenceController.addAttendence
);

module.exports = attendenceRoutes;
