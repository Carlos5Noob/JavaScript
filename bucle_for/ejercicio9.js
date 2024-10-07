let numeros = [10, 20, 30, 40, 50];
let sumaNumeros = 0;
for (let i = 0; i < numeros.length; i++) {
    sumaNumeros += numeros[i];
}
let promedio = sumaNumeros / numeros.length;
console.log("El promedio es: " + promedio);