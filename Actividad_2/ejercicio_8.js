function calcularFactorial(num) {

    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial *= i;
        
    }

    return factorial;

}

console.log("Introduce un número para calcular su factorial: ");
let num = parseInt(prompt());

console.log("El factorial de " + num + " es: " + calcularFactorial(num));