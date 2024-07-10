let nota = prompt("Ingrese la nota (de 0 a 10):");

nota = parseFloat(nota);

if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Número incorrecto. Introduce un número válido de 0 a 10.");
} else {
    let mensaje;
    if (nota >= 0 && nota <= 2) {
        mensaje = "Muy deficiente";
    } else if (nota >= 3 && nota <= 4) {
        mensaje = "Insuficiente";
    } else if (nota >= 5 && nota <= 6) {
        mensaje = "Suficiente";
    } else if (nota === 7) {
        mensaje = "Bien";
    } else if (nota >= 8 && nota <= 9) {
        mensaje = "Notable";
    } else if (nota === 10) {
        mensaje = "Sobresaliente";
    }

    alert("La calificación es: " + mensaje);
}
