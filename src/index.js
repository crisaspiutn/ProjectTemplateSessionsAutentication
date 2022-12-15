require("./config/config");
const path = require('path');
const express= require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const hbs=require("hbs");
// require("hbs/helpers");
const session= require('express-session');
const flash= require('connect-flash');
const app = express();
console.log(process.env.NODE_ENV);
// configuro plantilla middleware
// app.set('view engine', 'ejs');
hbs.registerPartials(path.join(__dirname,"views","partials"))
hbs.registerHelper("revisa_session",function(usuario) {
    console.log("el dato es: ",usuario);
    console.log(typeof usuario);
    if(estado==true)console.log("es verdadero");
    else if (usuario==null) console.log("es nulo");
    else console.log("es falso");
    return usuario;
})
app.set("view engine","hbs")
// middleware
app.set('views', path.join(__dirname, "views"));
// app.use(helmet());
// app.use(morgan('tiny'))

// configurable
app.set("port", process.env.PORT||3001);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'texto_secreto',
    resave: false,// evitar que se vuelva a guardar
    saveUninitialized: false,// evitar que se inicialice
    // cookie: { maxAge: 5000 }
}));
// app.use(flash());// quiza no lo use a no ser que ande usando la base de datos a cada rato
// rutas
app.use(require('./routes/router'));
app.use(express.static(path.join(__dirname, 'public')));
// handler
app.use((req,res,next)=>{
    res.render('error/error_generico');//parte para el navegador , otra parte para usuario
});

app.listen(app.get('port'),() => {
    console.log(app.get('port'));
});
// jade