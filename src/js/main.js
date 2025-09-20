// Prueba de encriptación DES

import { xor } from './utils/xor.js';
import { textoAHex } from './utils/texto-hex.js';
import {encryptAES_ECB_CustomZeroPadding} from './algorithms/aes.js';
import { hexToBase64 } from './utils/base64.js';


function encriptarDato() {
    //obtener datos de los inputs
    const dato = document.getElementById('dato-encriptar').value;
    const clave = document.getElementById('clave-encriptar').value; 
    
    //realizar conversión a HEX
    const resultadoHex = textoAHex(dato);
    document.getElementById('resultado-encriptacion').value = `\nHEX : ${resultadoHex}`;

    // encriptar dato EAS ECB
    const datoEncriptado = encryptAES_ECB_CustomZeroPadding(resultadoHex, clave);
    const resultadoEsperado = '6ec2f958b10cda34786fbd8fd648339f';
    document.getElementById('resultado-encriptacion').value += `\nAES-ECB: ${datoEncriptado}`;
    
    if (datoEncriptado === resultadoEsperado) {
        console.log('Resultado EAS Correcto');
    }
    else {
        console.log('Resultado Incorrecto');
    }

    //encriptar base64
    const datoBase64 = hexToBase64(datoEncriptado);
    const base64Esperado = 'bsL5WLEM2jR4b72P1kgznw==';
    document.getElementById('resultado-encriptacion').value += `\nBase64: ${datoBase64}`;

    if (datoBase64 === base64Esperado) {
        console.log('Resultado Base64 Correcto');
    }   else { console.log('Base64 Incorrecto'); }       
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



console.log("Main JS cargado correctamente.");

