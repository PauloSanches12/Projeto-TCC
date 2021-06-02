const dataCandidate = require("../models/dataCandidate");

module.exports = {
    async index(request, response) {
        const AllDataCandidate = await dataCandidate.findAll();

        return response.json(AllDataCandidate);
    },

    async store(request, response) {
        const DataCandidates = request.body;

        const createDataCandidates = await dataCandidate.create(DataCandidates);

        return response.status(201).json(createDataCandidates);
    }
}