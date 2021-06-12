const Questionnaire = require("../models/Questionnaire");

module.exports = {
    async index(request, response) {
        const allQuestionnaires = await Questionnaire.find();

        return response.json(allQuestionnaires);
    },

    async store(request, response) {
        const questionnaires = request.body;

        const createQuestionnaires = await Questionnaire.create(questionnaires);

        return response.status(201).json(createQuestionnaires);
    }
}