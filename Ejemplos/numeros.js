function duplicar(numero,callback){
    let resultado = numero *2;
    callback(resultado);
}//duplicar

function duplicado(resultado){
    console.log("El número duplicado es: ",resultado);
    
}

duplicar(25,duplicado);