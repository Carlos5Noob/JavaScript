function encontrarNumeroMayor(numeros) {
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return max;
}

let cantidad = parseInt(prompt("Ingresa la cantidad de números:"));
let numeros = [];

if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Ingresa una cantidad válida mayor que 0.");
} else {
    for (let i = 1; i <= cantidad; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + i + ":"));
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            console.log("Ingresa un número válido.");
            i--;
        }
    }

    let numeroMayor = encontrarNumeroMayor(numeros);
    console.log("El número más grande es: " + numeroMayor);
}
