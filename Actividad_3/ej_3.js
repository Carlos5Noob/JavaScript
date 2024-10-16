function addItem() {
    let nuevoItem = document.getElementById("newItemInput");
    let nuevoText = nuevoItem.value.trim();

    if (nuevoText === "") {
        alert("No has ingresado ningún elemento.");
        return;
    }

    let nuevoElemento = document.createElement("li");
    let nuevoBoton = document.createElement("button");
    let nuevoBoton2 = document.createElement("button");
    nuevoBoton.textContent = "BORRAR";
    nuevoBoton2.textContent = "COMPLETADO"

    nuevoBoton.addEventListener("click", function() {
        borrar(nuevoElemento);
    });

    nuevoBoton2.addEventListener("click", function(){
        completado(nuevoElemento);
    })

    nuevoElemento.textContent = " " +  nuevoText + " "; 
    nuevoElemento.appendChild(nuevoBoton);
    nuevoElemento.appendChild(nuevoBoton2);

    document.getElementById("itemsList").appendChild(nuevoElemento);
    nuevoItem.value = "";
}

document.getElementById("addItemBtn").addEventListener("click", function() {
    addItem();
});

function borrar(elemento) {
    elemento.remove(); 
}

function completado(elemento) {
    elemento.style.color = "red";
}
