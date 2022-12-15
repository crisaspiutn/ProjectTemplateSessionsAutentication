const nodemailer=require('nodemailer');

// origen : "correo@gmail.com" / cristianmultiutn@gmail.com
// destino: "cristianmultiutn@hotmail.com"
// asunto: "asunto" / Enviado desde nodemailer
// mensaje: "hola este es el mensaje quieres mas? xD"
function sendMessageToSopport(origen, clave, destino, asunto, mensaje){ // origen, clave, destino, mensaje
  let transporter=nodemailer.createTransport({
    // host:"smtp.ethernal.email",
    host:"smtp.gmail.com",
    post:465,
    secure:true,
    auth:{
        user:origen,
        pass:clave
    }
    ,tls:{    rejectUnauthorized:false    } // agregado
  });
  
  let mailOptions={
    name:"cristian",
    from:origen,
    to:destino,
    subject:asunto,
    text:mensaje
  };
//   transporter.verify(mailOptions, function (err, result) {  return err; });
    transporter.verify().then(()=>{
        console.log("conectado yes");
    }).catch(function (err) {
        console.log(err);
        });
    transporter.sendMail(mailOptions,(error,info)=>{
        console.log(info);
        if(error)console.log(error);
    });
}
function sendMessageToVerifyEmail(origen, clave, destino, asunto, html){ // origen, clave, destino, mensaje
  var transporter=nodemailer.createTransport({
    // host:"smtp.ethernal.email",
    host:"smtp.gmail.com",
    post:465,
    secure:true,
    auth:{
        user:origen,
        pass:clave
    }
    ,tls:{    rejectUnauthorized:false    } // agregado
    });
    
    var mailOptions={
        name:"cristian",
        from:origen,
        to:destino,
        subject:asunto,
        // text:mensaje
        html:`
        <div style="display: flex; justify-content: center; background-color: rgb(28, 28, 134); color: white; font-size: 20px; padding: 10px; font-family: Arial, Helvetica, sans-serif;">
        <div>
                <h1 style="margin: 5px; padding: 5px;">Código de verificación: <span style="background-color: white; padding: 5px 10px; border-radius: 15px; color: black;">123456</span></h1>
                <p style="padding: 4px 8px;">o haga clic en el enlace para activar su cuenta:</p>
                <a style="word-wrap: break-word; border-radius: 10px; background-color: white; padding: 4px 8px; weight: 800;" href="https://gestor.tiendaspormayor.online/registrar_cuenta/verificacion?token=${html}">https://gestor.tiendaspormayor.online/registrar_cuenta/verificacion</a>
        </div>
        </div>`
    };
//   transporter.verify(mailOptions, function (err, result) {  return err; });
    transporter.verify().then(()=>{
        console.log("conectado yes");
    }).catch(function (err) {
        console.log(err);
        });
    transporter.sendMail(mailOptions,(error,info)=>{
        console.log(info);
        if(error)console.log(error);
    });
}
// 
module.exports={
  sendMessageToSopport:sendMessageToSopport,
  sendMessageToVerifyEmail:sendMessageToVerifyEmail,
  importe:()=>console.log("importe")
}