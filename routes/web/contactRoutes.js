const express = require("express");
const contactRoutes = express.Router();
const contactController = require("../../controllers/web/contact/contactController");
const globlemiddleware = require("../../middlewares/globlemiddleware");

contactRoutes.post("/addContact", contactController.addContact);

module.exports = contactRoutes;
