const { model, Schema } = require('mongoose');

const questionnaireSchema = new Schema({
    label: String,
    isSelected: Boolean
});

const quizSchema = new Schema({
    questionName: String,
    alternatives: [questionnaireSchema]
})

const schema = new Schema({
    quiz: [quizSchema]
});

module.exports = model("Questionnaire", schema);