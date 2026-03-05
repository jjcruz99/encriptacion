/**
 * Convierte una cadena de valores hexadecimales a su representación en Base64.
 *
 * @param {string} hexString La cadena de entrada en formato hexadecimal sin espacios.
 * @returns {string} La cadena de salida en formato Base64.
 */
export function hexToBase64(hexString) {
    try {
   
        const hexWordArray = CryptoJS.enc.Hex.parse(hexString);

        const base64String = CryptoJS.enc.Base64.stringify(hexWordArray);

        return base64String;

    } catch (error) {
        console.error("Error en la conversión de Hex a Base64:", error);
        return null;
    }
}

export function base64ToHex(base64String) {
    try {
        
        const base64WordArray = CryptoJS.enc.Base64.parse(base64String);

        const hexString = CryptoJS.enc.Hex.stringify(base64WordArray);  

        return hexString;   
    } catch (error) {
        console.error("Error en la conversión de Base64 a Hex:", error);
        return null;
    }
}