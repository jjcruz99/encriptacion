/**
 * Convierte una cadena de valores hexadecimales a su representación en Base64.
 *
 * @param {string} hexString La cadena de entrada en formato hexadecimal sin espacios.
 * @returns {string} La cadena de salida en formato Base64.
 */
export function hexToBase64(hexString) {
    try {
        // 1. Convertir la cadena hexadecimal a un WordArray de CryptoJS
        // La función parse() es la clave aquí, le dice a CryptoJS cómo interpretar la cadena
        const hexWordArray = CryptoJS.enc.Hex.parse(hexString);

        // 2. Codificar el WordArray a Base64
        const base64String = CryptoJS.enc.Base64.stringify(hexWordArray);

        // 3. Devolver la cadena Base64 resultante
        return base64String;

    } catch (error) {
        console.error("Error en la conversión de Hex a Base64:", error);
        return null;
    }
}