const express = require("express");
const projectRoutes = express.Router();
const projectController = require('../../controllers/admin/projects/adminProjectController');
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
    projectRoutes.get('/departmentDetails/:id',globlemiddleware.ractifyError,projectController.projectDetails)


}

function postRoutes() {
    projectRoutes.post('/addDepartment',globlemiddleware.authenticate , globlemiddleware.ractifyError,projectController.addProject)
}
function patchRoutes(){
    projectRoutes.patch('/updateDepartment/:id', globlemiddleware.ractifyError,projectController.projectUpdate)

}
function deleteRoutes(){
    projectRoutes.delete('/deleteDepartment/:id',globlemiddleware.ractifyError,projectController.projectDelete)

}

function putRoutes() {
}

module.exports = projectRoutes;