const db = require('../models');


async function updateFuncService (req){
    const { id } = req.params;
    const funcionario = req.body;
    const fields = {attributes:['id','cargo','cpf','email','nome','sobrenome','data_nascimento','telefone_01','telefone_02','rua','numero','cep','bairro','cidade','estado']};
    await db.funcionarios.update(funcionario,{where : {id:Number(id)}});  
    const updated = await db.funcionarios.findOne(fields,{where : {id:Number(id)}});
    return updated;      
}

module.exports = { updateFuncService }; 



