
/**
 * Convierte una cadena de texto a su representación hexadecimal,
 * caracter por caracter.
 * @param {string} text La cadena de texto de entrada.
 * @returns {string} La cadena de valores hexadecimales separada por espacios.
 */
export function textoAHex(text) {
    let hexResult = '';
    
    
    for (let i = 0; i < text.length; i++) {
        // Obtener el valor del código del caracter (ASCII/UTF-8)
        const charCode = text.charCodeAt(i);
        
        // Convertir el valor a una cadena hexadecimal
        const hex = charCode.toString(16).padStart(2, '0');

        hexResult += hex + ' ';
    }

    return hexResult.trim();
}


export function hexATexto(hex) {
    try {
        
        const cleanedHex = hex.replace(/\s/g, '');

        let textResult = '';

        
        for (let i = 0; i < cleanedHex.length; i += 2) {
            
            const hexPair = cleanedHex.substring(i, i + 2);
            
            // base 10 (decimal)
            const byteValue = parseInt(hexPair, 16);
            
            // Convertir el valor decimal al caracter correspondiente
            textResult += String.fromCharCode(byteValue);
        }

    
        return textResult.replace(/\0/g, '');

    } catch (error) {
        console.error("Error al convertir Hex a Texto:", error);
        return null;
    }
}