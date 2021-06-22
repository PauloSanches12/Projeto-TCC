const { model, Schema } = require('mongoose');

const QuestionnaireCandidate = new Schema({
    label: String,
    isSelected: Boolean
});

const dataCandidate = new Schema({
    inscrito: String,
    email: String,
    alternative: [QuestionnaireCandidate]
});

const candidateSchema = new Schema({
    quizCandidates: [dataCandidate],
    date: { type: Date, default: Date.now },
});

module.exports = model("dataCandidate", candidateSchema);