const { Router } = require('express');

const router = Router();

router.get('/',((req, res) => {
    res.status(200).send({titulo: '෴❤️෴ Bem Vindo ao Restaurante Melinda ෴❤️෴'});
}));


module.exports = router;