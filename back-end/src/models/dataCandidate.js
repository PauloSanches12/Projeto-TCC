const { model, Schema } = require('mongoose');

const dataCandidateSchema = new Schema({
    name: String,
    email: String,
    quizCandidates: [String],
    date: { type: Date, default: Date.now },
});

module.exports = model("dataCandidate", dataCandidateSchema);