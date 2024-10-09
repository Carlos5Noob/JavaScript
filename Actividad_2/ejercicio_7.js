function celsiusAFarenheit(num) {
    return ((num*(9/5))+32);
}

function fahrenheitACelsius(num) {
    return ((num-32)*(5/9));
}

let opcion;
do{
console.log("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):");
opcion = parseInt(prompt());

switch (opcion) {
    case 1:
        console.log("Has elegido Celsius a Farenheit. Introduzca los grados Celsius que quieres convertir: ")
        let celsius = prompt();
        console.log(celsius + " grados Celsius son " + celsiusAFarenheit(celsius) + " grados Farenheit");
        break;
    case 2:
        console.log("Has elegido Farenheit a Celsius. Introduzca los grados Farenheit que quieres convertir: ")
        let farenheit = prompt();
        console.log(farenheit + " grados Farenheit son " + fahrenheitACelsius(farenheit) + " grados Celsius");
        break;
    default:
        console.error("Opción incorrecta, porfavor, vuelva a intentarlo: ");
} } while (opcion != 1 && opcion != 2);