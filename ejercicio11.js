let nombre1 = prompt("Ingrese el primer nombre:");
let edad1 = prompt("Ingrese la edad de " + nombre1 + ":");

let nombre2 = prompt("Ingrese el segundo nombre:");
let edad2 = prompt("Ingrese la edad de " + nombre2 + ":");

let nombre3 = prompt("Ingrese el tercer nombre:");
let edad3 = prompt("Ingrese la edad de " + nombre3 + ":");

edad1 = parseInt(edad1);
edad2 = parseInt(edad2);
edad3 = parseInt(edad3);

if (!isNaN(edad1) && !isNaN(edad2) && !isNaN(edad3)) {
    let edadMayor = Math.max(edad1, edad2, edad3);

    let nombreMayor;
    if (edadMayor === edad1) {
        nombreMayor = nombre1;
    } else if (edadMayor === edad2) {
        nombreMayor = nombre2;
    } else if (edadMayor === edad3) {
        nombreMayor = nombre3;
    }

    alert("La persona de mayor edad es: " + nombreMayor);
} else {
    alert("Error: Debe ingresar números válidos para las edades.");
}
