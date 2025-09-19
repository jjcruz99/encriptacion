// Prueba de encriptación DES

import { encryptDES, decryptDES } from './algorithms/des.js';
import { xor } from './algorithms/xor.js';
import { textoAHex } from './algorithms/texto-hex.js';
import {encryptAES_ECB, encryptAES_ECB_WithPadding} from './algorithms/aes.js';


function encriptarDato() {
    //obtener datos de los inputs
    const dato = document.getElementById('dato-encriptar').value;
    const clave = document.getElementById('clave-encriptar').value; 
    
    //realizar conversión a HEX
    const resultadoHex = textoAHex(dato);
    document.getElementById('resultado-encriptacion').value = `\nHEX : ${resultadoHex}`;

    // encriptar dato EAS ECB
    const datoEncriptado = encryptAES_ECB(resultadoHex, clave);
    //const datosEncriptadosConPadding = encryptAES_ECB_WithPadding(datosEntrada, clave);
    document.getElementById('resultado-encriptacion').value += `\nAES-ECB : ${datoEncriptado}`;

    //encriptar base64
    

}









//Calculo de PinBlock
function calcularPinblock() {
    alert('En desarrollo...');
    const tarjeta = document.getElementById('numero-tarjeta').value;
    const pin     = document.getElementById('clave-pinblock').value;
    const iv      = document.getElementById('vector').value;   
}

//Calculo de XOR

function calcularXOR() {
    const dato1 = document.getElementById('dato1').value;
    const dato2 = document.getElementById('dato2').value;
    const resultado = xor(dato1, dato2);
    document.getElementById('resultado-xor').value = resultado;
}


document.getElementById('boton-xor').addEventListener('click', calcularXOR);
document.getElementById('boton-pinblok').addEventListener('click',calcularPinblock);
document.getElementById('boton-encriptar').addEventListener('click', encriptarDato);



//Prueba de encriptación DES
console.log("\nPrueba de encriptación DES:");
const message = "Hola, este es un mensaje secreto.";
const key = "miClave";

// Encriptamos el mensaje usando la función que definiste
const encrypted = encryptDES(message, key);
console.log("Mensaje encriptado:", encrypted);

// Desencriptamos el mensaje
const decrypted = decryptDES(encrypted, key);
console.log("Mensaje desencriptado:", decrypted);



