const express = require("express");
const routes = express.Router();
const contactRoutes = require('./web/contactRoutes')
const employeeRoutes = require('./admin/employee');
const attendenceRoutes = require("./admin/attendence");
const departmentRoutes = require("./admin/department");

const initilization = ()=>{
web()
Employee()
}

const web =()=>{
routes.use('/web/contact',contactRoutes)
}
const Employee =() =>{
    routes.use('/admin/employee',employeeRoutes)
    routes.use('/admin/attendence',attendenceRoutes)
    routes.use('/admin/department',departmentRoutes)


}

initilization()

module.exports = routes;