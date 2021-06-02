const { Router } = require('express');
const { index, store } = require('./controllers/DataController');
const questionario = require('./controllers/QuestionnaireController');

const routes = Router();

routes.get("/", index);
routes.post("/", store);
routes.post("/questionnaires", questionario.store);

module.exports = routes;