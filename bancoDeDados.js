const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() //
{
  try
  {
    console.log('Conexão com o banco iniciou')

    //espera(libera o node para atender outros clientes enquanto esperamos a resposta do servidor externo)
    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conexao com o banco feita com sucesso!')
  }
  catch (erro)
  {
    console.log(erro)
  }

}

module.exports = conectaBancoDeDados

