function aplicar_descuento(precio, descuento) {
    return ((precio*descuento)/100);
}

console.log("Ingrese el precio original del producto: ");
let precio = parseFloat(prompt());
console.log("Ingrese el descuento del producto: ");
let descuento = parseFloat(prompt());

console.log("El precio final del producto después de aplicar un descuento del " + descuento + "%  es: " + (precio - aplicar_descuento(precio, descuento)) + " euros");