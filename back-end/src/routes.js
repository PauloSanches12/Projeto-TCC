const { Router } = require('express');
const questionario = require('./controllers/QuestionnaireController');
const dadosCandidatos = require('./controllers/DataCandidateController');

const routes = Router();

routes.post("/questionnaires", questionario.store);
routes.post("/dataCandidates", dadosCandidatos.store);

module.exports = routes;