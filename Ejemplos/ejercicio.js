const user = {
    "nombre":"Ethann",
    "edad":28,
    "correo":"ethan12@gmail.com"
}

const userStr = JSON.stringify(user);
console.log('JSON: ', userStr);

const userObject = JSON.parse(userStr);
console.log(`Usuario: ${userObject.nombre} ${userObject.edad} ${userObject.correo}`);

function mostrar (user,callback){
    console.log(`Bienvenido ${user.nombre}`);
    callback();
}

mostrar(userObject, ()=>{
    console.log("Callback Ejecutando");
})

