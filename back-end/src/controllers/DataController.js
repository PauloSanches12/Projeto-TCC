const Data = require('../models/Data');

module.exports = {
    async store(request, response) {
        const dados_form = request.body;
    
        const dadosForm = await Data.create(dados_form)
    
        return response.json(dadosForm);
    }
}