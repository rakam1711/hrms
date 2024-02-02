const express = require("express");
const departmentRoutes = express.Router();
const departmentController = require('../../controllers/admin/departments/adminDepartmentController');
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
    departmentRoutes.post('/addDepartment',globlemiddleware.ractifyError,departmentController.addDepartment)
}

function putRoutes() {
}

module.exports = departmentRoutes;