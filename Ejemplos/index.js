function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function despedir(nombre){
    console.log(`Adios ${nombre}`);
}

function procesarUsuario(nombre,callback){
    callback(nombre);
}

procesarUsuario('Ivan',despedir);