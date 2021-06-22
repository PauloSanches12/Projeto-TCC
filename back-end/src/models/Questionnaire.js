const { model, Schema } = require('mongoose');

const questionnaireSchema = new Schema({
    label: String,
    isSelected: Boolean,
    isResult: Boolean
});

const quizSchema = new Schema({
    questionName: String,
    alternative: [questionnaireSchema]
})

const schema = new Schema({
    quiz: [quizSchema]
});

module.exports = model("Questionnaire", schema);