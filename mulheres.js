

const express = require("express")
const router = express.Router()
const cors = require('') //trazendo pacote cors q permite consumir api no front

//ligando o BD e chamando a função q esta nesse arquivo
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()
//Trazendo pro meu arquivo o Model mulher
const Mulher = require('./mulherModel')


const app = express()
app.use(express.json())
app.use(cors())

const porta = 3333


/*Função */
//GET
async function mostraMulheres(request, response)
{
    try
        {
            const mulheresVindasDoBanco = await Mulher.find()
            response.json(mulheresVindasDoBanco)
        }
    catch(erro)
    {
        console.log(erro)
    }
}

//POST
async function criarMulher (request, response)
{
    const novaMulher = new Mulher
    ({
        nome:request.body.nome,
        imagem:request.body.imagem,
        minibio:request.body.minibio,
        citacao:request.body.citacao
    })
    try
    {   
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } 
    catch(erro)
    {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request,response)
{
   try
   {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if(request.body.nome)
        {
            mulherEncontrada.nome = request.body.nome
        }
        if(request.body.minibio)
        {
            mulherEncontrada.minibio = request.body.minibio
        }
        if(request.body.imagem)
        {
            mulherEncontrada.imagem = request.body.imagem
        }
        if(request.body.citacao)
        {
            mulherEncontrada.citacao = request.body.citacao
        }
        const mulherAtualizadaNoBanco = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBanco) //enviando a resposta, dizendo que foi alterada
   }
   catch(erro)
   {
        console.log(error)
   }
 

}

//Delete
async function deletaMulher(request,response)
{
    try
    {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json
        ({
            message:'Mulher deletada com sucesso!'
        })
    }
    catch(erro)
    {

    }
    
}


function mostraPorta() 
{
    console.log("Servidor criado e rodando na porta", porta)
}

/*Chamando a função */
/*o endereco é /mulheres para mostrar as mulheres no navegador*/
app.use(router.get('/mulheres',mostraMulheres))
app.use(router.post('/mulheres',criarMulher))//configurei rota Post/mulheres
app.use(router.patch('/mulheres/:id',corrigeMulher))
app.use(router.delete('/mulheres/:id',deletaMulher))
app.listen(porta, mostraPorta)