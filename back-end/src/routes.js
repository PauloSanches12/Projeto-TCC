const { Router } = require('express');
const { index, store } = require('./controllers/DataController');

const routes = Router();

routes.get("/", index);
routes.post("/", store);

module.exports = routes;