// imprima 5 veces la palabea sena
// ciclo for (para)
// Imprima 5 veces la palabra SENA

// Ciclo FOR (PARA)
for (let contador = 1; contador <= 5; contador++) {
    // contador = 1 -> Valor inicial
    // contador <= 5 -> Condición: se repite mientras sea verdadera
    // contador++    -> al final de cada vuelta, contador aumenta en 1
    console.log("SENA"); // Esto se imprime en cada una de las 5 vueltas
}


// Ciclo WHILE (MIENTRAS)
let contador = 1; // 1. Valor inicial
while (contador <= 5) { // 2. Condición: se repite mientras sea verdadera
    console.log("SENA4"); // Esto se imprime en cada una de las 5 vueltas
    contador++; // 3. Al final de cada vuelta, contador aumenta en 1 para evitar un bucle infinito
}

let contadorwhile = 1; // 1. Valor inicial

do {
    console.log("SENA3"); // Esto se imprime en cada una de las vueltas
    contadorwhile++; // ¡Aquí debe ser contadorwhile para que aumente!
} while (contadorwhile <= 5); // ¡Aquí también debe ser contadorwhile!