// const qrcode = ;
const { Client,LocalAuth } = require("whatsapp-web.js");
class Whatsapp{
    constructor(){
        this.client = new Client();// inicia hilos de ejecucion    o abre el navegador 
        this.client.initialize(); // internamente arranca hilos de ejecucion o navega a la url de whatsapp
        this.client.on("qr", (qr) => require("qrcode-terminal").generate(qr, { small: true }));// copia el QR que whatsapp da
        // Save session values to the file upon successful auth
        // this.client.on("authenticated", (session) => {   });// sirve para iniciar sesion guardada si lo tuviera
        this.client.on("auth_failure", msg =>console.error('Fallo al autenticar', msg))// add evento x si falla
        this.client.on("ready", () =>console.log("Client is ready!"));// add evento cuando ya se loguee
    }
    mandarMensajeDeWhatsapp(country_code,number,mensaje){
        let chatId = `${country_code}${number}@c.us`;
        this.client.sendMessage(chatId, mensaje).then((response) => {
            if (response.id.fromMe) {
                console.log("It works!");
            }
        })
    }
    responde_esto_si_dice_esto(me_dicen,yo_digo){
        this.client.on("message", message => {
            console.log("------------------------------------------------------------------------------------message");
            console.log(message);
            console.log("------------------------------------------------------------------------------------message");
            if (message.body.toString().toLowerCase() === me_dicen) {
                client.sendMessage(message.from, yo_digo);
            }
        });
    }
}
module.exports = Whatsapp;


