// Prueba de encriptación DES

import { encryptDES, decryptDES } from './algorithms/des.js';
import { xor } from './algorithms/xor.js';
import { textoAHex } from './algorithms/texto-hex.js';


document.getElementById('boton-encriptar').addEventListener('click', () => {

    //obtener datos de los inputs
    const dato = document.getElementById('dato-encriptar').value;
    const clave = document.getElementById('clave-encriptar').value; 
    
    //realizar conversión a HEX
    const resultadoHex = textoAHex(dato);
    document.getElementById('resultado-encriptacion').value = `HEX : ${resultadoHex}`;

    // encriptar dato

});

// Prueba de eas ECB
import {encryptAES_ECB, encryptAES_ECB_WithPadding} from './algorithms/aes.js';
const datosEntrada = '789012'; // Ahora es texto, no hexadecimal.
const clave        = '0A4DB114E703A5247B7E8B2D8830AF80'; // Clave en formato hexadecimal.
const resultadoEsperado = 'c7d6d3efcfc03cb0426c713628d077cf'; // Resultado esperado en hexadecimal.

const datosEncriptados = encryptAES_ECB(datosEntrada, clave);
const datosEncriptadosConPadding = encryptAES_ECB_WithPadding(datosEntrada, clave);

console.log("\nPrueba de encriptación AES-ECB:");
console.log('Datos de entrada (texto):', datosEntrada);
console.log('Clave (hex):', clave);
console.log('Resultado esperado:', resultadoEsperado);
console.log('Datos encriptados (AES-ECB):', datosEncriptados);
console.log('Datos encriptados (AES-ECB) con pading:', datosEncriptadosConPadding);
 if (datosEncriptados === resultadoEsperado || datosEncriptadosConPadding === resultadoEsperado) {
    console.log('Lo logramos gemini!');
}else{
    console.log('No lo logramos gemini!');
}


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

