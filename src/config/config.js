const path=require("path");
// const desa=path.join(__dirname,"../../development"+".env");
// console.log("process.env.NODE_ENV");// borrar en produccion
// console.log(process.env.NODE_ENV);// borrar en produccion

if(process.env.NODE_ENV=="production"){
    console.log("esta en modo produccion");
    require("dotenv").config({path: path.resolve(__dirname,"../../"+process.env.NODE_ENV+".env")});
}else if(process.env.NODE_ENV=="development"){
    console.log("esta en modo desarrollo");
    require("dotenv").config({path: path.resolve(__dirname,"../../"+process.env.NODE_ENV+".env")});
}
else{
    console.log("esta en modo indefinido .env");
    require("dotenv").config();
    // console.log(process.env.NODE_ENV);// borrar en produccion
}
if(process.env.NODE_ENV=="production"){
    console.log("esta en modo produccion");
    require("dotenv").config({path: path.resolve(__dirname,"../../"+process.env.NODE_ENV+".env")});
}else if(process.env.NODE_ENV=="development"){
    console.log("esta en modo desarrollo");
    require("dotenv").config({path: path.resolve(__dirname,"../../"+process.env.NODE_ENV+".env")});
}
else{
    console.log("esta en modo indefinido .env");
    require("dotenv").config();
    // console.log(process.env.NODE_ENV);// borrar en produccion
}
