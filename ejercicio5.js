while (true) {
    let input = prompt("Ingrese el número de DNI (debe ser entre 0 y 99999999):");

    if (input === null) {
        break; 
    }

    let dni = parseInt(input);

    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
        let resto = dni % 23;
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        let letraDNI = letras[resto];

        alert(`La letra del DNI ${dni} es: ${letraDNI}`);
    } else {
        alert("Error, debe ingresar un número válido de DNI");
    }
}
