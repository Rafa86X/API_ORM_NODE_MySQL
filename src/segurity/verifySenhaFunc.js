const db = require('../models');
const { compare } = require('bcrypt');
const { tokenGenerate } = require('./tokenGenerate');


async function verifySenhaFunc( id, senha){
     
    let user = await await db.funcionarios.findOne({ 
        attributes:['id','nome','email','cargo','senha'],                              
        where: {
            id: String(id),
            ativo:Number(1)
        }}
    );
    
    if (user==null) {
        { throw new Error('Usuario ou senha incorretos');}
    }

    const senhasIguais = await compare(senha, user.senha);

    if(senhasIguais){
        const acssesToken = await tokenGenerate(user);

        const userToken = {
            id: user.id,              
            email: user.email,
            nome: user.nome,
            cargo: user.cargo,
            acssesToken: acssesToken
        };

        return userToken; 
    }
    else
    { throw new Error('Usuario ou senha incorretos');}
    
 
}

module.exports = { verifySenhaFunc }; 