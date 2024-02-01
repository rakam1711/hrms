const express = require("express");
const routes = express.Router();
const contactRoutes = require('./web/contactRoutes')
const employeeRoutes = require('./admin/employee')

const initilization = ()=>{
web()
Employee()
}

const web =()=>{
routes.use('/web/contact',contactRoutes)
}
const Employee =() =>{
    routes.use('/admin/employee',employeeRoutes)
}

initilization()

module.exports = routes;