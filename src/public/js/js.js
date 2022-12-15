console.log("hol")
document.body.classList.add("hi","a");
document.body.classList.remove("clase1","clase2");
const bandeja=document.getElementById("bandeja");
bandeja.addEventListener("keypress",()=>{
    console.log(bandeja.value);
    pizzarra.innerHTML=bandeja.value;
});
const check1=document.getElementById("check1");
check1.addEventListener("click",()=>{
    console.log("tocado")
    pizzarra.classList.toggle("b");
    pizzarra.classList.toggle("n");
});