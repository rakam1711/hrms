const express = require("express");
const departmentRoutes = express.Router();
const departmentController = require('../../controllers/admin/departments/adminDepartmentController');
const globlemiddleware = require('../../middlewares/globlemiddleware');

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
    patchRoutes();
    deleteRoutes();
}

initilization();

function getRoutes() {
    departmentRoutes.get('/departmentDetails/:id',globlemiddleware.ractifyError,departmentController.departmentDetails)


}

function postRoutes() {
    departmentRoutes.post('/addDepartment',globlemiddleware.authenticate , globlemiddleware.ractifyError,departmentController.addDepartment)
}
function patchRoutes(){
    departmentRoutes.patch('/updateDepartment/:id', globlemiddleware.ractifyError,departmentController.departmentUpdate)

}
function deleteRoutes(){
    departmentRoutes.delete('/deleteDepartment/:id',globlemiddleware.ractifyError,departmentController.departmentDelete)

}

function putRoutes() {
}

module.exports = departmentRoutes;