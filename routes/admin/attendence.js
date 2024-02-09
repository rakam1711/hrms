const express = require("express");
const attendenceRoutes = express.Router();
const attendenceController = require('../../controllers/admin/attendence/adminAttendenceController');
const globlemiddleware = require('../../middlewares/globlemiddleware');

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();

function getRoutes() {

}

function postRoutes() {
    attendenceRoutes.post('/addAttendence',globlemiddleware.authenticate,globlemiddleware.ractifyError,attendenceController.addAttendence)
}

function putRoutes() {
}

module.exports = attendenceRoutes;