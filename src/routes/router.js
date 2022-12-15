const {Router}=require('express');
const router=Router();
const path=require('path');

router.get('/', function(req, res) {
    res.render('index',{
        sesion:""
    });
});
// router.post('/registro',require('./registracion/registro'));
router.use('/iniciar_sesion',require('./sesion/sesion'));// recibe tipo Router
router.use('/registrar_cuenta',require('./registracion/registro'));// recibe tipo Router
router.use('/recuperar_cuenta',require('./recuperacion/recuperador'));// recibe tipo Router
router.use('/mostrar_productos',require('./productos/productos'));// recibe tipo Router
// router.get('/video.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/Meet_ jqu-zemr-vop - Google Chrome 2022-09-20 16-35-35.mp4")));
// router.get('/fisica1.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/fisicaparte12022-09-22 14-32-10.mp4")));
// router.get('/fisica2.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/fisicaparte22022-09-22 15-56-46.mp4")));
// router.get('/aga04-10.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/aga12022-10-04 16-30-13.mp4")));
// router.get('/ingles08-10-inicio.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/ingles2022-inicio-10-08 16-30-13.mp4")));
// router.get('/ingles08-10-fin.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/ingles2022-fin-10-08 16-30-13.mp4")));
// router.get('/aga11-10.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/aga1-2022-10-11 14-55-48.mp4")));
// router.get('/aga11-10-parte2.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/aga1-parte2-10-11 16-32-50.mp4")));
// router.get('/aga1-10-28-parte1.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/aga1-10-28-parte1.mp4")));
// router.get('/aga1-10-28-parte2.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/aga1-10-28-parte2.mp4")));
// router.get('/aga1-11-01-parte1.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/aga1-11-01-parte1.mp4")));
// router.get('/aga1-11-01-parte2.mp4',(req,res) => res.sendFile(path.join(__dirname,"../videos/aga1-11-01-parte2.mp4")));
module.exports = router;