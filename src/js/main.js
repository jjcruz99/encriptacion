// Prueba de encriptación DES

import { xor } from './algorithms/xor.js';
import { textoAHex } from './algorithms/texto-hex.js';
import {encryptAES_ECB_CustomZeroPadding} from './algorithms/aes.js';


function encriptarDato() {
    //obtener datos de los inputs
    const dato = document.getElementById('dato-encriptar').value;
    const clave = document.getElementById('clave-encriptar').value; 
    
    //realizar conversión a HEX
    const resultadoHex = textoAHex(dato);
    document.getElementById('resultado-encriptacion').value = `\nHEX : ${resultadoHex}`;

    // encriptar dato EAS ECB
    const datoEncriptado = encryptAES_ECB_CustomZeroPadding(resultadoHex, clave);
    const resultadoEsperado = '210e9d865b666174122718f4bb6b7a6e';
    document.getElementById('resultado-encriptacion').value += `\nAES-ECB: ${datoEncriptado}`;
    
    if (datoEncriptado === resultadoEsperado) {
        console.log('Resultado Correcto');
    }
    else {
        console.log('Resultado Incorrecto');
    }

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



console.log("Main JS cargado correctamente.");

