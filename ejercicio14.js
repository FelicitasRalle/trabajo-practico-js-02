let cadena = prompt("Ingrese una cadena de texto:");

let resultado = '';

for (let i = 0; i < cadena.length; i++) {
    resultado += cadena[i];
    
    if (i !== cadena.length - 1) {
        resultado += '-';
    }
}
console.log("Texto con guiones: " + resultado);
alert("Texto con guiones: " + resultado);
