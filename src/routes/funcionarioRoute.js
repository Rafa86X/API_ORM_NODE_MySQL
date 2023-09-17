const { Router } = require('express');
const FuncionarioController = require('../controllers/FuncionarioController.js');
const { paginar } = require('../middlewares/paginar.js');
const { testerTokenValid } = require('../segurity/testerTokenValid.js');

const router = Router();

router.use(testerTokenValid);

router.get('/funcionarios/ativosinativos', FuncionarioController.getAllAtivosInativos,paginar)
    .get('/funcionarios/ativos', FuncionarioController.getAllAtivos,paginar)
    .get('/funcionarios/:id', FuncionarioController.getOne)
    .post('/funcionarios', FuncionarioController.create)
    .post('/funcionarios/auth/novologin', FuncionarioController.createLogin)
    .put('/funcionarios/:id', FuncionarioController.update)
    .delete('/funcionarios/:id', FuncionarioController.inative);

module.exports = router;


