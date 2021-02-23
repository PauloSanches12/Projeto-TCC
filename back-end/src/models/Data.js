const { model, Schema } = require('mongoose');

const DataSchema = new Schema({
    dados_form: String
});

module.exports = model("Data", DataSchema);