const db = require('../models');
const { verify, decode } = require('jsonwebtoken');
require('dotenv').config();

async function authencatorByEndPoint (token, tabela, metodo){

    
    const tabelaMetodo = tabela+'_'+metodo;
            
    const [, acssesToken] = token.split(' ');
        
    verify(acssesToken,process.env.SEGREDO_TOKEN);
        
    const { cargo } = decode(acssesToken); // decifar o token para saber qual o cargo do funcionario que esta tentando fazer a requisiçao
        
    const aut = await db.autorizacoes.findOne({ where: { id: cargo }});
        
    const cargoAut = aut.dataValues.cargo;
    
    let autorizacaoDoFuncionario = aut.dataValues.autorizacao; // recebe as autrizaçoes que o cargo lhe confere
        
    autorizacaoDoFuncionario= autorizacaoDoFuncionario.split(' ');
    const testeAutorizacao = autorizacaoDoFuncionario.includes(tabelaMetodo);
                
    if(testeAutorizacao==false){
        throw new Error(`O perfil de usuário '${cargoAut}' não tem perissão para realizar a ação.`);
    }                      
       
 
}

module.exports = { authencatorByEndPoint }; 