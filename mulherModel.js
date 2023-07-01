//trazer o mongoose para o arquivo
const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema
(
    {
        nome:
        {
            type:String,
            required:true
        },
        imagem:
        {
            type:String,
            required:true,
        },
        citacao:
        {
            type:String,
            require:true
        },
        minibio:
        {
            type:String,
            require:true
        },
    }
)

module.exports = mongoose.model('diva',MulherSchema)