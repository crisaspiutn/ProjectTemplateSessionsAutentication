const {Router}=require('express');
const router=Router();
router.get('/', function(req, res) {
    console.log("req.session.valor");
    console.log(req.session.valor);
    if(req.session.valor){
        res.render('zona_productos/productos',{
            usuario:req.session.valor
        });
    }
    else{
        res.render('zona_productos/productos',{
            usuario:""
        });
    }
});


module.exports = router;

