// Prueba de encriptación DES

import { xor } from './utils/xor.js';
import { textoAHex } from './utils/texto-hex.js';
import {encryptAES_ECB_CustomZeroPadding,encryptAES_CBC} from './algorithms/aes.js';
import { hexToBase64 } from './utils/base64.js';
import { pinPan } from './utils/pin-pan.js';
import { generarPinblock } from './algorithms/3des.js';
import { mostrarToast,mostrarMensajeError,ocultarMensajeError } from './utils/notificador.js';

function encriptarDato() {
    try{
    ocultarMensajeError();
    //obtener datos de los inputs
    const dato = document.getElementById('dato-encriptar').value;
    const clave = document.getElementById('clave-encriptar').value;
    
    //validar que los datos no esten vacios
    if (dato === '') {    
        mostrarMensajeError(1);  
    }
    else{
        ocultarMensajeError(1);
    }

    if (clave === '') {     
        mostrarMensajeError(2);
    }
    else{
        ocultarMensajeError(2);
    }

    if(dato === '' || clave === ''){
        mostrarToast('Por favor, diligencie los campos 😥.',"error");
         return null;  
    }
    
    //realizar conversión a HEX
    const resultadoHex = textoAHex(dato);
    document.getElementById('resultado-encriptacion').value = `\nHEX : ${resultadoHex}`;

    // encriptar dato EAS ECB
    const datoEncriptado = encryptAES_ECB_CustomZeroPadding(resultadoHex, clave); 
    document.getElementById('resultado-encriptacion').value += `\nAES-ECB: ${datoEncriptado}`;
    
    //encriptar base64
    const datoBase64 = hexToBase64(datoEncriptado);
    document.getElementById('resultado-encriptacion').value += `\nBase64: ${datoBase64}`; 

    if(datoBase64){
            mostrarToast("Encriptación ¡Exitosa 🤗!");
    }
 
    } 
    catch (error) {
        console.error('Error en la encriptación. Detalles: ', error);
        return null;
    }   
}


//Calculo de PinBlock
function calcularPinblock() {
    try {
     //capturar datos
    const tarjeta = document.getElementById('numero-tarjeta').value;
    const claveTarjeta = document.getElementById('numero-pin').value;
    const keyDes = document.getElementById('clave-pinblock').value;
    const keyEas = document.getElementById('clave-pin-EAS').value;
    const iv      = document.getElementById('vector').value;
    
    //validar campos vacios
    if (tarjeta === '') {    
        mostrarMensajeError(3);  
    }
    else{
        ocultarMensajeError(3);
    }

    if (claveTarjeta === '') {    
        mostrarMensajeError(4);  
    }
    else{
        ocultarMensajeError(4);
    }

    if (keyDes === '') {    
        mostrarMensajeError(5);  
    }
    else{
        ocultarMensajeError(5);
    }

    if (keyEas === '') {    
        mostrarMensajeError(6);  
    }
    else{
        ocultarMensajeError(6);
    }

    if (iv === '') {    
        mostrarMensajeError(7);  
    }
    else{
        ocultarMensajeError(7);
    }


    if(tarjeta==="" || claveTarjeta==="" || keyDes==="" || keyEas===""){
        mostrarToast("Digite todos los campos 😥, por favor","error");
        return null;
    }

    //validar longitud de campos
    if(tarjeta.length != 16){
        mostrarToast("Longitud de datos de la tarjeta Incorrectos","error");
        return null;
    }

    if(claveTarjeta.length != 4){
        mostrarToast("Longitud de datos de la clave Incorrectos","error");
        return null;
    }    

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
    const hexPinblock = textoAHex(pinblock);

    //encriptar EAS
    const encriptEasCbc = encryptAES_CBC(hexPinblock,keyEas,iv);

    //Pinblock base64
    const pinblok64 = hexToBase64(encriptEasCbc);

    //mostrar resultado temporal
    document.getElementById('resultado-pinblock').value = `\nBase64: ${pinblok64}`
    document.getElementById('resultado-pinblock').value += `\nPINBLOCK: ${pinblock}`;
    document.getElementById('resultado-pinblock').value += `\nPinAnsi: ${pinAnsi}`;

    if(pinblok64){
        mostrarToastExitoso("Generacion de Pinblock ¡Exitosa 🤗!");
    }
    

    // validacion para un dato de prueba
    if (pinblok64 === "DPjqM6m6jOZZHIq9YQmYLQ=="){
        alert("Pinblock Correcto");
    }

    } 
    catch (error) {
    console.error('Error en el cálculo del PINBLOCK. Detalles: ', error);
    mostrarToast("Error "+error,"error");
    return null;
    }
}



//Calculo de XOR

function calcularXOR() {

    try{

    const dato1 = document.getElementById('dato1').value;
    const dato2 = document.getElementById('dato2').value;

    //validar campos vacios

    if (dato1 === '') {    
        mostrarMensajeError(8);  
    }
    else{
        ocultarMensajeError(8);
    }

    if (dato2 === '') {    
        mostrarMensajeError(9);  
    }
    else{
        ocultarMensajeError(9);
    }

    if(dato1==='' || dato2===''){
        mostrarToast("Digite los dos campos 😥. Por favor","error");
        return null;
    }

    //Realizar operacion xor
    const resultado = xor(dato1, dato2);
    document.getElementById('resultado-xor').value = `\n ${resultado}`;

    if(resultado){
     mostrarToast("Xor ¡Exitosa 🤗!");
    }

    }
    catch(error){
        mostrarToast("Error al calcular XOR. "+error,"error")
        return null;
    }
}  


document.getElementById('boton-xor').addEventListener('click', calcularXOR);
document.getElementById('boton-pinblok').addEventListener('click',calcularPinblock);
document.getElementById('boton-encriptar').addEventListener('click', encriptarDato);



console.log("Main JS cargado correctamente.");

