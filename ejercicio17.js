let texto = prompt("Ingrese un texto:");

function esVocal(caracter) {
    caracter = caracter.toLowerCase();
    return 'aeiouáéíóú'.indexOf(caracter) !== -1;
}

function encontrarPrimeraVocal(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (esVocal(texto[i])) {
            return i + 1; 
        }
    }
    return -1; 
}

let posicion = encontrarPrimeraVocal(texto);

if (posicion !== -1) {
    console.log("La primera vocal '" + texto[posicion - 1] + "' está en la posición " + posicion);
    alert("La primera vocal '" + texto[posicion - 1] + "' está en la posición " + posicion);
} else {
    console.log("No se encontraron vocales en el texto.");
    alert("No se encontraron vocales en el texto.");
}
