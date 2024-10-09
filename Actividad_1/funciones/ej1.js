function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function calcularPerimetro(radio) {
    return 2 * Math.PI * radio;
}

let radio = parseFloat(prompt("Ingresa el radio del círculo:"));

if (isNaN(radio) || radio <= 0) {
    console.log("Ingresa un número válido mayor que 0.");
} else {
    console.log("Área: " + calcularArea(radio).toFixed(2));
    console.log("Perímetro: " + calcularPerimetro(radio).toFixed(2));
}
