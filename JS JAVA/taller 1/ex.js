let nombre, edad, direccion, movil, email; // se pueden declarar varias variables del mismo tipo.

// prompt es una palabra reservada en JavaScript que despliega una función y sale un mensaje de tipo alert para el usuario.
nombre = prompt('Escriba su nombre: '); // pedir datos al usuario.
edad = prompt('Escriba su edad: '); // pedir datos al usuario.
direccion = prompt('Escriba su direccion: '); // pedir datos al usuario.
movil = prompt('Escriba su movil: '); // pedir datos al usuario.
email = prompt('Escriba su email: '); // pedir datos al usuario.

// Crear el contenido ordenado con etiquetas HTML
let contenido = `
    <h3>Resultados en pantalla:</h3>
    <p>Bienvenido: ${nombre}</p>
    <p>Tu edad es: ${edad}</p>
    <p>Tu direccion es: ${direccion}</p>
    <p>Tu movil es: ${movil}</p>
    <p>Tu email es: ${email}</p>
`;

// Enviar el contenido al HTML
document.getElementById("resultado").innerHTML = contenido;

// Imprimir en la consola del navegador (F12)
console.log("Bienvenido: ", nombre);
console.log("Tu edad es: ", edad);
console.log("Tu direccion es: ", direccion);
console.log("Tu movil es: ", movil);
console.log("Tu email es: ", email);