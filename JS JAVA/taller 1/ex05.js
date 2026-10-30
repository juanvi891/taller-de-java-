// Operadores matemáticos

let a, b;
let c, d;

let suma, resta, mult, div, residuo, potencia;

// Obtener los datos a través del usuario (primera parte)
a = prompt('Ingrese un número: ');
b = prompt('Ingrese otro número: ');

// Resultados de las operaciones
suma = Number (a) + Number (b); // Aqui la operación da un error debido a que se concatenan los datos
document.write("La suma es: ", suma,"<br>");
console.log("La suma es: ", suma);

resta = a - b;
document.write("La resta es: ", resta,"<br>");
console.log("La resta es: ", resta);

mult = a * b;
document.write("La multiplicación es: ", mult,"<br>");
console.log("La multiplicación es: ", mult);

residuo = a % b;
document.write("El residuo es: ", residuo,"<br>");
console.log("El residuo es: ", residuo);

potencia = a ** b;
document.write("La potencia es: ", potencia,"<br>");
console.log("La potencia es: ", potencia);


// Obtener los datos a través del usuario (segunda parte con parseInt y parseFloat)
c = parseInt(prompt('Ingrese un número: '));
d = parseFloat(prompt('Ingrese otro número: '));

suma = c + d;
resta = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;

document.writeln("Los resultados de las operaciones son: ", 
    "Suma: ", suma, '<br>',
    "Resta: ", resta, '<br>',
    "Multiplicación: ", mult, '<br>',
    "División: ", div, '<br>',
    "Residuo: ", residuo, '<br>',
    "Potencia: ", potencia, '<br>'
);

console.log("Las operaciones resueltas son: ", 
    "Suma: ", suma,
    "Resta: ", resta,
    "Multiplicación: ", mult,
    "División: ", div,
    "Residuo: ", residuo,
    "Potencia: ", potencia
);