console.log("Ingrese su altura en metros: ");
let altura = parseFloat(prompt());
console.log("Ingrese su peso en kg: ");
let peso = parseFloat(prompt());
let imc = (peso/(Math.pow(altura, 2)));
console.log("Su IMC es de " + imc);

if (imc < 18.5) {
    console.log("Clasificación: Bajo peso");
}
else if (imc > 18.5 && imc < 24.9) {
    console.log("Clasificación: Peso normal");
}
else if (imc > 24.9 && imc < 29.9) {
    console.log("Clasificación: Sobrepeso");
}
else {
    console.log("Clasificación: Obesidad");
}