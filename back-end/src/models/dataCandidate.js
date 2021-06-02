const { model, Schema } = require('mongoose');

const dataCandidateSchema = new Schema({
    name: String,
    email: String,
    dominancia: Number,
    influencia: Number,
    estabilidade: Number,
    conformidade: Number
});

module.exports = model("dataCandidate", dataCandidateSchema);