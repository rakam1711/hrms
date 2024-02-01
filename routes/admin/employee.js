const express = require("express");
const employeeRoutes = express.Router();
const {addEmployee,employeeDetails , employeeUpdate , employeeDelete} = require('../../controllers/admin/employee/adminEmployeeController');
const {listingContacts} = require('../../controllers/admin/contact/adminContactController')
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
    employeeRoutes.get('/employeeDetails/:id',globlemiddleware.ractifyError , employeeDetails);
    employeeRoutes.get('/employeeList',globlemiddleware.ractifyError , listingContacts);

    
}

function postRoutes() {
    employeeRoutes.post('/addEmployee',globlemiddleware.formDataParser,globlemiddleware.ractifyError,addEmployee);
    employeeRoutes.post('/loginEmployee',globlemiddleware.ractifyError,employeeLogin);

}

function putRoutes() {

}

function patchRoutes(){
    employeeRoutes.patch('/updateEmployee/:id',globlemiddleware.ractifyError , employeeUpdate)
}
function deleteRoutes(){
    employeeRoutes.delete('/deleteEmployee/:id' ,globlemiddleware.ractifyError , employeeDelete )
}

module.exports = employeeRoutes;