const db = require('../models');


async function getAllAtivosInativosService (){
    const fields = {attributes:['id','cargo','cpf','email','nome','sobrenome','data_nascimento','telefone_01','telefone_02','rua','numero','cep','bairro','cidade','estado','ativo']};
    const getAllAtivosInativos = await db.funcionarios.findAll(fields);
    return getAllAtivosInativos;
        

}

module.exports = { getAllAtivosInativosService }; 