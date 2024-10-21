let frasesFrikisInformatica = ["2+2 son 4 puto", "Mainkra", "Viva er lih of leyen", "Rango? Hierro", "Meloetta tipo planta", "Por la cara loquete"];

function fraseAleatoria(array) {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    
    document.getElementById("texto-informatica").innerHTML = array[indiceAleatorio];
}


document.getElementById("ver-mas-boton").addEventListener("click", function() {
    fraseAleatoria(frasesFrikisInformatica);
});