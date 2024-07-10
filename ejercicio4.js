let suma = 0;

while (true) {
    let input = prompt("Ingrese un número:");

    if (input === null) {
        break; 
    }

    let numero = parseFloat(input);

    if (!isNaN(numero)) {
        suma += numero;
    } else {
        alert("Error: ¡Ingrese un número válido!"); 
    }
}

alert(`La suma total de los números introducidos es: ${suma}`);
