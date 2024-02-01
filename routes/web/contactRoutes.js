const express = require("express");
const contactRoutes = express.Router();
const contactController = require('../../controllers/web/contact/contactController');
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
    contactRoutes.post('/addContact',globlemiddleware.ractifyError,contactController.addContact)
}

function putRoutes() {
}

module.exports = contactRoutes;