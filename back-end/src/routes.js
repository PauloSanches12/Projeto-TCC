const { Router } = require('express');
const { index, store } = require('./controllers/DataController');
const questionario = require('./controllers/QuestionnaireController');
const dadosCandidatos = require('./controllers/DataCandidateController');

const routes = Router();

routes.get("/", index);
routes.post("/", store);

routes.post("/questionnaires", questionario.store);
routes.post("/dataCandidates", dadosCandidatos.store);

module.exports = routes;