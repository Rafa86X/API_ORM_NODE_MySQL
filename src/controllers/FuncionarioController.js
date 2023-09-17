const { getAllAtivosInativosService } = require('../services/getAllAtivosInativosService.js');
const { getOneFuncService } = require('../services/getOneFuncService.js');
const { createFuncService } = require('../services/createFuncService');
const { updateFuncService } = require('../services/updateFuncService');
const { inativeFuncService } = require('../services/inativeFuncService');
const { getAllAtivosService } = require('../services/getAllAtivosService');
const { encriptador } = require('../segurity/encripterPassword');
const { verifySenhaFunc } = require('../segurity/verifySenhaFunc');
const { authencatorByEndPoint } = require('../segurity/authencatorByEndPoint');


const  tabela  = 'funcionarios';

class FuncionarioController{


    static async getAllAtivosInativos (req, res, next){

        try {
            
            const metodType = 'r';
            const token = req.headers.authorization;

            await authencatorByEndPoint(token, tabela , metodType);
     
            const dados = await getAllAtivosInativosService(req);
            req.dados = dados;            
            next();

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    
    static async getAllAtivos (req, res, next){

        try {
            const metodType = 'r';
            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);
            const dados = await getAllAtivosService();
            req.dados = dados;            
            next();
            
        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    static async getOne (req, res){

        try {
            const metodType = 'r';

            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);

            const dados = await getOneFuncService(req);
            return res.status(200).json(dados);
            
        } catch (error) {
            return res.status(404).json(error.message);
        }
    }

    static async create(req,res){
        try {

            const metodType = 'c';
            const token = req.headers.authorization;
            const dados = req.body;
            await authencatorByEndPoint(token, tabela , metodType);

            const novoFunc = await createFuncService(dados);
            return res.status(201).json(novoFunc);

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    static async createLogin(req,res){
        try {
            
            const metodType = 'c';
            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);
            const { cpf, senha } = req.body;

            const user  = await encriptador(cpf,senha);

            return res.status(201).json(user);

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    static async login(req,res){
        try {
            

            const { id, senha } = req.body;

            const user  = await verifySenhaFunc(id,senha);

            return res.status(200).json(user);

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    
    static async update(req,res){

        try {

            const metodType = 'u';
            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);
            const updated = await updateFuncService(req);
            return res.status(200).json(updated);  

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    static async inative(req,res){
        try {

            const metodType = 'd';
            const token = req.headers.authorization;
            
            await authencatorByEndPoint(token, tabela , metodType);

            await inativeFuncService(req);
            return res.status(200).json('Registro deletado com sucesso.');  

        } catch (error) {
            return res.status(401).json(error.message);
        }
    }
}

module.exports = FuncionarioController;