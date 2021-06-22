const { model, Schema } = require('mongoose');

const questionnaireCandidate = new Schema({
    label: String,
    isSelected: Boolean
});

const dataCandidate = new Schema({
    inscrito: String,
    email: String,
    alternative: [questionnaireCandidate]
});

const candidateSchema = new Schema({
    quizCandidates: [dataCandidate],
    date: { type: Date, default: Date.now },
});

module.exports = model("dataCandidate", candidateSchema);