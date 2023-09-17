const { Router } = require('express');
const FuncionarioController = require('../controllers/FuncionarioController.js');

const router = Router();

router.post('/auth/login', FuncionarioController.login);


module.exports = router;