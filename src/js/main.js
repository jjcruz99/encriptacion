// Prueba de encriptación DES

import { xor } from './utils/xor.js';
import { textoAHex } from './utils/texto-hex.js';
import {encryptAES_ECB_CustomZeroPadding} from './algorithms/aes.js';
import { hexToBase64 } from './utils/base64.js';
import { pinPan } from './utils/pin-pan.js';
import { generarPinblock } from './algorithms/3des.js';

function encriptarDato() {
    try{
    //obtener datos de los inputs
    const dato = document.getElementById('dato-encriptar').value;
    const clave = document.getElementById('clave-encriptar').value;
    
    //validar que los datos no esten vacios
    if (dato === '' || clave === '') {
        alert('Por favor, diligencie los dos campos.');
        return;
    }
    
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
    catch (error) {
        console.error('Error en la encriptación. Detalles: ', error);
    }   
}



//Calculo de PinBlock
function calcularPinblock() {
    try {
    
    const tarjeta = document.getElementById('numero-tarjeta').value;
    const claveTarjeta     = document.getElementById('numero-pin').value;
    const keyDes     = document.getElementById('clave-pinblock').value;
    const iv      = document.getElementById('vector').value;
    
    let calcularPinpan=pinPan(tarjeta,claveTarjeta);
    const pin= calcularPinpan.slice(0,16);
    const pan= calcularPinpan.slice(16,32);
    const pinAnsi = xor(pin,pan).toUpperCase();
 
    //Prueba
    if(pin === "046481FFFFFFFFFF" && pan === "0000467033549341"){
        console.log("Funciona pin y pan");
    }
    if(pinAnsi === "0464C78FCCAB6CBE"){
        console.log("PinAnsi Correcto");
    }

    //Calcular pinblock
    const pinblock = generarPinblock(pinAnsi,keyDes,iv);

    //conversion a HEX
    const hexPinblock = textoAHex(pinblock)


    //mostrar resultado temporal
    document.getElementById('resultado-pinblock').value = `PINBLOCK: ${pinblock}`;
    document.getElementById('resultado-pinblock').value += `\nPinAnsi: ${pinAnsi}`;
    document.getElementById('resultado-pinblock').value += `\n HEXpinBlock: ${hexPinblock}`;
    alert('En desarrollo...');
    } 
    catch (error) {
    console.error('Error en el cálculo del PINBLOCK. Detalles: ', error);
    }
}



//Calculo de XOR

function calcularXOR() {
    const dato1 = document.getElementById('dato1').value;
    const dato2 = document.getElementById('dato2').value;
    const resultado = xor(dato1, dato2);
    document.getElementById('resultado-xor').value = `\n ${resultado}`;
}  


document.getElementById('boton-xor').addEventListener('click', calcularXOR);
document.getElementById('boton-pinblok').addEventListener('click',calcularPinblock);
document.getElementById('boton-encriptar').addEventListener('click', encriptarDato);



console.log("Main JS cargado correctamente.");

