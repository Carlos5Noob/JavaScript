function verificarNumero(num) {
if (num > 0) {
    console.log("El número es positivo");
}
else if (num < 0) {
    console.log("El número es negativo");

}
else {
    console.log("El número es cero");
}
}

function verificarEdad(edad) {
    if (edad > 18 && edad < 65) {
        console.log("La persona es adulta");
    }
    else if (edad < 18) {
        console.log("La persona es menor de edad");
    
    }
    else if (edad > 65){
        console.log("La persona es anciana");
    }
}

verificarNumero(0);
verificarEdad(12);