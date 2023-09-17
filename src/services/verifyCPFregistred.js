const db = require('../models');


async function verifyCPFRegistredService (cpf){
    const getOne = await db.funcionarios.findOne({                               
        where: {
            cpf: String(cpf),
            ativo:Number(1)
        }}
    );
          
    if(getOne==null)
    {throw new Error('Funcionario não cadastrado na base de dados ou desativado!');}

    return getOne.id;
 
}

module.exports = { verifyCPFRegistredService }; 