const { model, Schema } = require('mongoose');

const dataCandidateSchema = new Schema({
    name: String,
    email: String,
    quizCandidates: [String]
});

module.exports = model("dataCandidate", dataCandidateSchema);