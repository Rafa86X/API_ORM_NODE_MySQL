const { verify } = require('jsonwebtoken');
require('dotenv').config();

async function testerTokenValid( req, res, next ){
    
    try{
        const token = req.headers.authorization;
        
        if(!token){
            throw new Error({ message: 'Token invalido, ou ausência de token.'});
        }        
        const [, acssesToken] = token.split(' ');

        verify(acssesToken,process.env.SEGREDO_TOKEN);
        
        return next();
    }
    catch (error) {
        res.status(401).json({ message: 'Token invalido, ou ausência de token.'});
    }
}

module.exports = { testerTokenValid }; 