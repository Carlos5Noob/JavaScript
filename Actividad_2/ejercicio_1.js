console.log("Buenos días, viajero. Porfavor, ingrese los gatos de cada categoría. ");
console.log("Gastos de alojamiento: ");
let alojamiento = parseFloat(prompt());
console.log("Gastos de alimentación: ");
let alimentacion = parseFloat(prompt());
console.log("Gastos de entretenimiento: ");
let entretenimiento = parseFloat(prompt());

let coste_total = alojamiento + alimentacion + entretenimiento;

console.log("El coste total del viaje es " + coste_total + " €");