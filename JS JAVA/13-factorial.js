// Escriba el factorial de un número

const n = 5;

console.log("--- CICLO PARA ---");
let factorialFor = 1;
for (let i = 1; i <= n; i++) {
    factorialFor *= i;
}
console.log("El factorial de ", n, " es: ", factorialFor);

console.log("--- CICLO MIENTRAS ---");
let factorialWhile = 1;
let i = 1;
while (i <= n) {
    factorialWhile *= i;
    i++;
}
console.log("El factorial de ", n, " es: ", factorialWhile);


// Segundo bloque de CICLO MIENTRAS (Corregido: usaba 'factorialWhile' en lugar de 'factorial')
const k = 5;
let factorial = 1;
let e = 1;

while (e <= k) {
    factorial *= e;
    e++;
}
console.log("El factorial de", k, "es:", factorial);


// Escriba el factorial de un número usando CICLO REPETIR (do...while)
const u = 5;
let factorialDoWhile = 1;
let s = 1;

do {
  factorialDoWhile *= s;
  s++;
} while (s <= u);

console.log("El factorial de", u, "es:", factorialDoWhile);