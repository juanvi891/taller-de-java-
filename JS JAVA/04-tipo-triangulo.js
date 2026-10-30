// equilatero = los 3 lados son iguales
// isoseles = 2  lados iguales 
// escaleno = todos los lados son diferentes 

const ladoA = 5 ;
const ladoB = 6 ;
const ladoC = 7 ;

// primero validamos q ningun lado sea cero o negativo 
// Primero validamos que ningún lado sea cero o negativo.
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log("Los lados deben ser mayores que cero");
    // "||" Es el operador "Ó" Basta con que una de las condiciones se cumpla
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    // Regla geométrica: La suma de los lados siempre debe ser mayor que el tercer lado, si no, no se puede formar un triángulo real.
    console.log("Los valores no forman un triángulo válido");
} else if (ladoA === ladoB && ladoB === ladoC) {
    // "&&" Es el operador "Y" Las condiciones evaluadas deben de ser verdaderas
    console.log("El triángulo es EQUILÁTERO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    // Si no es Equilátero, pero al menos dos de los lados coinciden, el triángulo es Isósceles.
    console.log("El triángulo es ISÓSCELES");
} else {
    // Si no se cumple ninguna de las condiciones anteriores es decir que todos los lados son distintos.
    console.log("El triángulo es ESCALENO");
}