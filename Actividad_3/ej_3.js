function addItem() {
    let nuevoItem = document.getElementById("newItemInput");
    let nuevoText = nuevoItem.value.trim();

    if (nuevoText === "") {
        alert("No has ingresado ningún elemento.");
        return;
    }

    let nuevoElemento = document.createElement("li");
    let nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "BORRAR";

    nuevoBoton.addEventListener("click", function() {
        borrar(nuevoElemento);
    });

    nuevoElemento.textContent = nuevoText + " "; 
    nuevoElemento.appendChild(nuevoBoton);

    document.getElementById("itemsList").appendChild(nuevoElemento);
    nuevoItem.value = "";
}

document.getElementById("addItemBtn").addEventListener("click", function() {
    addItem();
});

function borrar(elemento) {
    elemento.remove(); 
}
