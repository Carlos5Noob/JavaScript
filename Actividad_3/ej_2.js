let colores = ["#ff0000",
"#00ff00",
"#0000ff", 
"#ff00ff", 
"#00ffff", 
"#ff8000", 
"#8000ff", 
"#00ff80", 
"#ff0080",
"#80ff00", 
"#0080ff", 
"#ffbf00", 
"#bf00ff", 
"#00ffbf", 
"#bf00ff", 
"#00bfff", 
"#ff00bf", 
"#80ff80", 
"#ff80ff", 
"#80ffff" 
];

let frasesFrikisInformatica = ["2+2 son 4 puto", "Mainkra", "Viva er lih of leyen", "Rango? Hierro", "Meloetta tipo planta", "Por la cara loquete"];

function cambiarColor(array) {

    let colorAleatorio = Math.floor(Math.random() * array.length);
    let colorAleatorio2 = Math.floor(Math.random() * array.length);

    document.getElementById("ver-mas-boton").style.color = array[colorAleatorio];
    document.getElementById("texto-informatica").style.color = array[colorAleatorio2];

}

document.getElementById("ver-mas-boton").addEventListener("click", function(){
    cambiarColor(colores);
});



function fraseAleatoria(array) {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    
    document.getElementById("texto-informatica").innerHTML = array[indiceAleatorio];
}


document.getElementById("ver-mas-boton").addEventListener("click", function() {
    fraseAleatoria(frasesFrikisInformatica);
});