const { sign } = require('jsonwebtoken');
require('dotenv').config();

async function tokenGenerate( user ){

    const acssesToken = sign({ id: user.id, email: user.email, cargo: user.cargo }, process.env.SEGREDO_TOKEN,{expiresIn:28800});
    return acssesToken; 

}

module.exports = { tokenGenerate }; 