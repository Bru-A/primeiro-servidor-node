

const express = require("express")
const app = express()
const porta = 3333

/*Função */
function mostraPorta() 
{
    console.log("Servidor criado e rodando na porta", porta)
}

/*Chamando a função */
app.listen(porta, mostraPorta)