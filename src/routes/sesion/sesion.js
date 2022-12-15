const {Router}=require('express');
const router=Router();

router.get('/', function(req, res, next) {
    console.log(req.query);
    console.log(req.body);
    console.log("me llego a sesion");
    // console.log(req.session.valor);
    let variable=req.session.valor;
    // console.log(req.flash("success")[0]);
    // let variable=req.flash('success')[0];
    console.log(variable);
    res.render('zona_sesion/iniciar_sesion',{
        sesion:variable
    });
});


module.exports = router;