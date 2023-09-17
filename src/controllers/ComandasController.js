/* eslint-disable linebreak-style */
const { createNewComanda } = require('../services/createNewComandaService');
const { getAllComandasService } = require('../services/getAllComandasService');
const { validDadosComandasService } = require('../services/validDadosComandasService');
const { authencatorByEndPoint } = require('../segurity/authencatorByEndPoint');
const { getOneComandaService } = require('../services/getOneComandaService');


const  tabela  = 'comandas';

class ComandasController{


    static async getAllComandas (req, res, next){
       
        try {

            const metodType = 'r';
            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);

            const {data} = req.params;
            
            let dados = await getAllComandasService(data);
            req.dados = dados;            
            next();          

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    static async getOneComandas (req, res){
       
        try {

            const metodType = 'r';
            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);

            const {data, comanda } = req.params;
            
            let dados = await getOneComandaService(data, comanda);
            res.status(200).json(dados);                    

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    static async createComanda (req, res){
        
        try {

            const metodType = 'c';
            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);
            
            let dados = req.body;

            validDadosComandasService(dados);

            await createNewComanda(dados);
            res.status(201).json('Comanda criada com sucesso.');

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }


}

module.exports = ComandasController;