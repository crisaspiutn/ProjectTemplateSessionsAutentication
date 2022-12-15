class VerificationToken{
    constructor() {
        this.valid=true;
        this.startTheTimer();
    }
    startTheTimer() {
        setTimeout(() => {
            this.expireToken();
        }, 15 *1000);
    }
    expireToken() {
        this.valid=false;
    }
    isValid() {
        return this.valid;
    }
}
export default VerificationToken;

// //@test
// let token1=new VerificationToken();
// setTimeout(() => {
//    console.log("valides: ",token1.isValid());
//    setTimeout(() => {
//     console.log("valides: ",token1.isValid());
//     }, 20 *1000);
// }, 10000);