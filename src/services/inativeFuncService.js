const db = require('../models');


async function inativeFuncService (req){
    const { id } = req.params;
    await db.funcionarios.update({ativo:0},{where : {id:Number(id)}});      
}

module.exports = { inativeFuncService }; 