const {Router}=require('express');
const router=Router();

router.get('/', function(req, res, next) {
    res.render('zona_recuperador/recuperador');
});
router.post('/enviar_codigo_recuperador', function(req, res, next) {
    const {request}=req.body;
    console.log(request);
    res.render('zona_recuperador/confirma_token');
});
router.post('/confirmar_codigo_recuperador', function(req, res, next) {
    const {token}=req.body;
    console.log("token");
    console.log(token);
    res.render('zona_recuperador/reset_password');
});
router.post('/resetear_password', function(req, res, next) {
    const {password,password2}=req.body;
    console.log(req.body);
    res.render('zona_recuperador/reset_password');
});
module.exports = router;