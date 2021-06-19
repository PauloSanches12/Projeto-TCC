const { model, Schema } = require('mongoose');

const QuestionnaireSchema = new Schema({
    label: String,
    isSelected: Boolean,
    isResult: Boolean
});

const QuizSchema = new Schema({
    questionName: String,
    alternative: [QuestionnaireSchema]
})

const schema = new Schema({
    quiz: [QuizSchema]
});

module.exports = model("Questionnaire", schema);