let texto = prompt("Ingrese una cadena de texto:");

function invertirTexto(cadena) {
    return cadena.split('').reverse().join('');
}

let textoInvertido = invertirTexto(texto);

console.log("Texto invertido: " + textoInvertido);
alert("Texto invertido: " + textoInvertido);
