const { Router } = require('express');
const DataController = require('./controllers/DataController');

const routes = Router();

routes.post("/", DataController.store);

module.exports = routes;