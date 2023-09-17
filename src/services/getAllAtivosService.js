const db = require('../models');


async function getAllAtivosService (){
    const query = {attributes:['id','cargo','cpf','email','nome','sobrenome','data_nascimento','telefone_01','telefone_02','rua','numero','cep','bairro','cidade','estado','ativo'], where : {ativo:Number(1)}};
    const getAllAtivosInativos = await db.funcionarios.findAll( query);
    return getAllAtivosInativos;
        

}

module.exports = { getAllAtivosService }; 