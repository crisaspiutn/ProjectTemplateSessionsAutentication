const {VerificationToken}=require("./VerificationToken").default;
const {Person}=require("./Person");
class Account extends Person{
    constructor(username, password,mail,whatsapp) {
        this.username = username;
        this.password = password;
        this.mail = mail;
        this.whatsapp = whatsapp;
        this.active_Account=false;// activated
        this.token=new VerificationToken();
        // this.person=new Person();
    }
    activateAccount() {
        this.valid=this.token?true:false;
    }
    isActive(){
        return this.active_Account;
    }
    getUserName(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getMail(){
        return this.mail;
    }
    getWhatsapp(){
        return this.whatsapp;
    }

}
module.exports = Account;