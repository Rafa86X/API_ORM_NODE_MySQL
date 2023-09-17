const db = require('../models');


async function createFuncService (dados){
    
    const {cpf} = dados;
    const getOne = await db.funcionarios.findOne({                               
        where: {
            cpf: String(cpf),
        }}
    );
          
    if(getOne!=null)
    {throw new Error('O cpf do fucionario ja esta cadastrado no base de dados.');}

    const novoFuncionario = dados;     
    const created = await db.funcionarios.create(novoFuncionario);              
    return created;

}

module.exports = { createFuncService }; 