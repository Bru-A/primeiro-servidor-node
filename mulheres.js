

const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Simara Conceicao',
        imagem:'https://stock.adobe.com/pt/images/portrait-smile-confident-business-designer-black-woman-yellow-suit-office-black-business-girl-startup-successful-power-business-leader-women-executive-people-looking-copy-space-isolated-on-yellow/592131900',
        minibio: 'minibio simara'
    },
    {
        nome:'Iana Chan',
        imagem:'https://stock.adobe.com/pt/images/portrait-smile-confident-business-designer-black-woman-yellow-suit-office-black-business-girl-startup-successful-power-business-leader-women-executive-people-looking-copy-space-isolated-on-yellow/592131900',
        minibio: 'minibio Iana'
    },
]

/*Função */
function mostraMulheres(request, response)
{
    /*json pq são muitos dados e no () vai o identificador*/
    response.json(mulheres)
}

function mostraPorta() 
{
    console.log("Servidor criado e rodando na porta", porta)
}

/*Chamando a função */
/*o endereco é /mulheres para mostrar as mulheres no navegador*/
app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)