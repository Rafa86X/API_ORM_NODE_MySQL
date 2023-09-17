const db = require('../models');
const { hash } = require('bcrypt'); 

const { verifyCPFRegistredService } = require('../services/verifyCPFregistred');


async function encriptador(cpf, senha){
     

    const testCPF = await verifyCPFRegistredService(cpf);
    const passwordCrypto = await hash(senha, 8);    
    senha = passwordCrypto; 

    await db.funcionarios.update({senha},{where : {id:Number(testCPF)}});  
    const updated = await db.funcionarios.findOne({
        attributes:['id','nome','cargo','cpf','email','senha'],
        where : {id:Number(testCPF)}});

    return updated;  
   
 
}

module.exports = { encriptador }; 