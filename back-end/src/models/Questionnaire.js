const { model, Schema } = require('mongoose');

const QuestionnaireSchema = new Schema({
    quiz: [String]
});

module.exports = model("Questionnaire", QuestionnaireSchema);