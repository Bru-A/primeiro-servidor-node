const express = require("express")
/*Configurando a rota*/
/*Router() é uma função que está vindo de dentro do express*/
const router = express.Router()


const app = express()
const porta = 3333

/*Funções */

/*função que envia uma resposta qnd ela for chamada*/
function mostraOla(request, response)
{
    response.send("Olá, mundo!")

}

function mostraPorta() 
{
    console.log("Servidor criado e rodando na porta", porta)
}

/*Enviar o endereço e chamar a func mostraOla */
app.use(router.get('/ola',mostraOla))

/*Chamando a função */
app.listen(porta, mostraPorta)