
const express = require("express")

const router = express.Router()

const app = express()
const porta = 3333

/*Função */

function mostraMulher(request,response)
{
    response.json
    (
        {
            nome: 'Bruna',
            imagem: 'fffff.png',
            minibio: 'Desenvolvedora Java'   
        }
    )       
}

function mostraPorta() 
{
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)