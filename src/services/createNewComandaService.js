const db = require('../models');


async function createNewComanda (dados){

             
    const {itens_comanda, numero_comanda, data, id_funcionario, nome_cliente} = dados.comanda
    
    itens_comanda.forEach(async item  => {

          const {id_produto , preco, descricao} = item

          await db.comandas.create({comanda:Number(numero_comanda), data:String(data), nome_cliente:String(nome_cliente), id_funcionario:Number(id_funcionario), id_produto:Number(id_produto),preco:Number(preco),descricao:String(descricao)});             
          
    });

    return -1;

}

module.exports = { createNewComanda }; 