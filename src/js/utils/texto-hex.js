
/**
 * Convierte una cadena de texto a su representación hexadecimal,
 * caracter por caracter.
 * @param {string} text La cadena de texto de entrada.
 * @returns {string} La cadena de valores hexadecimales separada por espacios.
 */
export function textoAHex(text) {
    let hexResult = '';
    
    // Recorrer cada caracter de la cadena de texto
    for (let i = 0; i < text.length; i++) {
        // Obtener el valor del código del caracter (ASCII/UTF-8)
        const charCode = text.charCodeAt(i);
        
        // Convertir el valor a una cadena hexadecimal
        // padStart(2, '0') asegura que cada valor tenga dos dígitos
        const hex = charCode.toString(16).padStart(2, '0');
        
        // Agregar el valor hexadecimal al resultado, con un espacio
        // para separarlo del siguiente
        hexResult += hex + ' ';
    }
    
    // Eliminar el espacio final para limpiar el resultado
    return hexResult.trim();
}