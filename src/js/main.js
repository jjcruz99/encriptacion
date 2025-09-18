// Prueba de encriptación DES

import { encryptDES, decryptDES } from './algorithms/des.js';
import { xor } from './algorithms/xor.js';
import { textoAHex } from './algorithms/texto-hex.js';


document.getElementById('boton-encriptar').addEventListener('click', () => {
    const dato = document.getElementById('dato-encriptar').value;
    const clave = document.getElementById('clave-encriptar').value; 

    const resultadoHex = textoAHex(dato);

    document.getElementById('resultado-encriptacion').value = `HEX : ${resultadoHex}`;

});

console.log("\nPrueba de encriptación DES:");
const message = "Hola, este es un mensaje secreto.";
const key = "miClave";

// Encriptamos el mensaje usando la función que definiste
const encrypted = encryptDES(message, key);
console.log("Mensaje encriptado:", encrypted);

// Desencriptamos el mensaje
const decrypted = decryptDES(encrypted, key);
console.log("Mensaje desencriptado:", decrypted);


// Prueba de la función XOR
console.log("\nPrueba de la función XOR:");
const dato1 = '44818500aec1080d';
const dato2 = '42525fffffffffff';

const resultado = xor(dato1, dato2);

console.log(`DATO1:     ${dato1}`);
console.log(`DATO2:     ${dato2}`);
console.log(`RESULTADO XOR : ${resultado}`);

