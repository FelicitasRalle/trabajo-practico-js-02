let texto = prompt("Ingrese un texto:");

function esVocal(caracter) {
    caracter = caracter.toLowerCase();
    return 'aeiouáéíóú'.indexOf(caracter) !== -1;
}

let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
    if (esVocal(texto[i])) {
        contadorVocales++;
    }
}

console.log("El texto tiene " + contadorVocales + " vocales.");
alert("El texto tiene " + contadorVocales + " vocales.");
