const express = require("express");
const routes = express.Router();
const contactRoutes = require('./web/contactRoutes')

const initilization = ()=>{
web()
}

const web =()=>{
routes.use('/web/contact',contactRoutes)
}

initilization()

module.exports = routes;