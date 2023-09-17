/* eslint-disable linebreak-style */
const { Router } = require('express');
const ComandasController = require('../controllers/ComandasController.js');
const { paginar } = require('../middlewares/paginar.js');

const router = Router();


router.get('/:data/comandas', ComandasController.getAllComandas, paginar)
    .get('/:data/:comanda/comandas', ComandasController.getOneComandas)
    .post('/comandas', ComandasController.createComanda );


module.exports = router;