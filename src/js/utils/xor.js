// src/js/algorithms/xor.js

/**
 * Realiza una operación XOR bit a bit en dos cadenas hexadecimales.
 * @param {string} hex1 La primera cadena hexadecimal.
 * @param {string} hex2 La segunda cadena hexadecimal.
 * @returns {string} El resultado de la operación XOR en cadena hexadecimal.
 */
export function xor(hex1, hex2) {

    try {
        let result = '';
        // Asegurarse de que ambas cadenas hexadecimales tengan la misma longitud
        if (hex1.length > hex2.length) {
            hex2 = hex2.padStart(hex1.length, '0');
        }
        else if (hex2.length > hex1.length) {
            hex1 = hex1.padStart(hex2.length, '0');
        }
        
        // Iterar a través de las cadenas en pares de dos caracteres (bytes)
        for (let i = 0; i < hex1.length; i += 2) {
            // Obtener los bytes como subcadenas
            const byte1 = hex1.substring(i, i + 2);
            const byte2 = hex2.substring(i, i + 2);

            // Convertir los bytes hexadecimales a enteros
            const int1 = parseInt(byte1, 16);
            const int2 = parseInt(byte2, 16);

            // Realizar la operación XOR bit a bit
            const xorResult = int1 ^ int2;

            // Convertir el resultado entero de nuevo a una cadena hexadecimal
            // padStart(2, '0') asegura que el resultado tenga siempre dos dígitos (ej. 'a' se vuelve '0a')
            const hexResult = xorResult.toString(16).padStart(2, '0');

            // Añadir el resultado a la cadena final
            result += hexResult;
    }
   
    return result;
    } 
    catch (error) {
        alert('Error en la función XOR. Detalles: ', error.message);
        return null;
    }
}