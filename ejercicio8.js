let numeroMaximo = prompt("Ingrese un número (no mayor de 50):");

numeroMaximo = parseInt(numeroMaximo);

if (!isNaN(numeroMaximo) && numeroMaximo > 0 && numeroMaximo <= 50) {
    for (let i = 1; i <= numeroMaximo; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
    }
} else {
    alert("Error: Debe ingresar un número válido entre 1 y 50.");
}
