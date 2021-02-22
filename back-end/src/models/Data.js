const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    dados_form: String
});

module.exports = mongoose.model("Data", DataSchema);