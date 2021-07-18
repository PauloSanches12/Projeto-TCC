const { Router } = require('express');
const questionario = require('./controllers/QuestionnaireController');
const dadosCandidatos = require('./controllers/DataCandidateController');

const routes = Router();

routes.post("/questionnaires", questionario.store);
routes.get("/questionnaires", questionario.index);

routes.post("/dataCandidates", dadosCandidatos.store);
routes.get("/dataCandidates", dadosCandidatos.index);

module.exports = routes;