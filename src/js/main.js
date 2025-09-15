// src/js/main.js

import { encryptDES, decryptDES } from './algorithms/des.js';

const message = "Hola, este es un mensaje secreto.";
const key = "miClave";

// Encriptamos el mensaje usando la función que definiste
const encrypted = encryptDES(message, key);
console.log("Mensaje encriptado:", encrypted);

// Desencriptamos el mensaje
const decrypted = decryptDES(encrypted, key);
console.log("Mensaje desencriptado:", decrypted);

