let cadenas = [];

while (true) {
    let texto = prompt("Ingrese una cadena de texto (o pulse cancelar para terminar):");

    if (texto === null) {
        break; 
    }

    cadenas.push(texto);
}

if (cadenas.length > 0) {
    let resultado = cadenas.join('-');
    alert("Cadenas ingresadas: " + resultado);
} else {
    alert("No se ha ingresado ninguna cadena.");
}
