function addItem() {
    let elementoInput = document.getElementById("newTaskInput");

    let textoInput = elementoInput.value.trim();

    if (textoInput === "") {
        alert("No has ingresado nada. ");
        return;
    }

    let nuevaColumna = document.createElement("li");
    
    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "BORRAR";
    

    botonBorrar.onclick = function() {
        eliminar(nuevaColumna);
    }


    let nodoTexto = document.createTextNode(textoInput);
    nuevaColumna.appendChild(nodoTexto);
    nuevaColumna.appendChild(botonBorrar);

    document.getElementById("taskList").appendChild(nuevaColumna);
    elementoInput.value = "";

}



function eliminar(elemento) {
    elemento.remove();
}


document.getElementById("addTaskBtn").addEventListener("click", function(){
    addItem();
});