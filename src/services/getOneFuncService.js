const db = require('../models');


async function getOneFuncService (req){
    const {id} = req.params;
    const getOne = await db.funcionarios.findOne({ 
        attributes:['id','cargo','cpf','email','nome','sobrenome','data_nascimento','telefone_01','telefone_02','rua','numero','cep','bairro','cidade','estado'],                              
        where: {
            id: Number(id)
        }}
    );       
    return getOne;
 
}

module.exports = { getOneFuncService }; 