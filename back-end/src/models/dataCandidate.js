const { model, Schema } = require('mongoose');

const questionnaireCandidate = new Schema({
    label: String,
    isSelected: Boolean
});

const dataCandidate = new Schema({
    alternative: [questionnaireCandidate]
});

const candidateSchema = new Schema({
    inscrito: String,
    email: String,
    quizCandidates: [dataCandidate],
    date: { type: Date, default: Date.now },
});

module.exports = model("dataCandidate", candidateSchema);