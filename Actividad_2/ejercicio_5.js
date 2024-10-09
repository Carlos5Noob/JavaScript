function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


console.log("Ingrese dos números: ")
let num1 = prompt();
let num2 = prompt();

let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

for (let i = min; i <= max; i++) {
    if (esPrimo(i)) {
        console.log(i)
    }
    
}