function comprobarVisibilidad(elemento) {
    return window.getComputedStyle(elemento).display !== "none";
}


function ocultaCaja() {
document.getElementById("box").style.display = "none";
document.getElementById("toggleBtn").innerHTML = "Mostrar Caja";
}

function muestraCaja() {
document.getElementById("box").style.display = "block";
document.getElementById("toggleBtn").innerHTML = "Ocultar Caja";
}


document.getElementById("toggleBtn").addEventListener("click", function(){
    if(comprobarVisibilidad(document.getElementById("box"))) {
        ocultaCaja();
    } else {
        muestraCaja();
    }
});
