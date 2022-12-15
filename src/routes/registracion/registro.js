const {sendMessageToSopport,sendMessageToVerifyEmail}=require('./../../modules/nodemailer');
const Whatsapp=require('./../../modules/Whatsapp');
const {Router}=require('express');
const router=Router();
// const nuevo=new Whatsapp();
// router.post('/registro', function(req, res, next) {
router.post('/', function(req, res, next) {
    console.log(req.body);
    const {username,password,password2,email,celular} = req.body;
    req.session.tokenTemporal=random();
    sendMessageToVerifyEmail(process.env.MAIL_ORIGIN,process.env.MAIL_KEY,email,"Codigo de verificacion",req.session.tokenTemporal);
    // nuevo.mandarMensajeDeWhatsapp('549',celular,"su codigo de verificacion es: *"+req.session.tokenTemporal+"*");
    // req.flash('success',req.body.username) // solo lo podre llamar una vez, despues se eliminara
    res.render('zonaregistro/registrarse', {
        // username: req.session.valor
        username: req.session.valor
    });
    // req.flash('success',req.body.username)
});
router.get('/', function(req, res, next) {
    console.log(req.body);
    // req.session.valor = req.body.username;
    // req.flash('success',req.body.username)
    res.render('zonaregistro/registrarse', {
        // username: req.session.valor
        username: req.body.username
    });
    // req.flash('success',req.body.username)
});
router.get('/verificacion?', function(req, res, next) {
    console.log(req.query);
    const {token}=req.query;
    if(token==req.session.tokenTemporal){
        res.send("<h1>Autenticado correctamente</h1>")
    }else{
        res.send("<h1>Fallo al Autenticar</h1>")

    }
    // console.log(req.body);
    // res.redirect("/")
});
function random(){
    return Math.random().toString(36).substr(2);
}

module.exports = router;