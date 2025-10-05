
/**
 * Encripta datos hexadecimales (con o sin espacios) usando AES en modo ECB,
 * rellenando manualmente con ceros.
 * @param {string} hexData Los datos a encriptar en formato hexadecimal con o sin espacios.
 * @param {string} hexKey La clave de encriptación en formato hexadecimal.
 * @param {string} hexIv El vector de inicialización (IV) en formato hexadecimal.
 * @returns {string} Los datos encriptados en formato hexadecimal.
 */
export function encryptAES_ECB_CustomZeroPadding(hexData, hexKey) {
    try {
        // 1. Limpiar los espacios de la cadena de entrada
        const cleanedHexData = hexData.replace(/\s/g, '');

        // 2. Rellenar con ceros hasta un múltiplo de 32 (16 bytes)
        const blockSizeHex = 32; // 16 bytes en hexadecimal
        let paddedHexData = cleanedHexData;

        if (paddedHexData.length % blockSizeHex !== 0) {
            const paddingSize = blockSizeHex - (paddedHexData.length % blockSizeHex);
            paddedHexData = paddedHexData + '0'.repeat(paddingSize);
        }

        // 3. Convertir la clave y los datos rellenados 
        const key = CryptoJS.enc.Hex.parse(hexKey);
        const data = CryptoJS.enc.Hex.parse(paddedHexData);

        // 4. Encriptar usando AES en modo ECB y sin padding 
        const encrypted = CryptoJS.AES.encrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding
        });

        // 5. Devolver solo el texto cifrado en formato hexadecimal
        return encrypted.ciphertext.toString(CryptoJS.enc.Hex);

    } catch (error) {
        console.error("Error en la encriptación AES-ECB:", error);
        return null;
    }
}

export function encryptAES_CBC(hexData, hexKey, hexIv) {
    try {
   // 1. Limpiar los espacios de la cadena de entrada
        const cleanedHexData = hexData.replace(/\s/g, '');

        // 2. Rellenar con ceros hasta un múltiplo de 32 (16 bytes en hexadecimal)
        const blockSizeHex = 32;
        let paddedHexData = cleanedHexData;

        if (paddedHexData.length % blockSizeHex !== 0) {
            const paddingSize = blockSizeHex - (paddedHexData.length % blockSizeHex);
            paddedHexData = paddedHexData + '0'.repeat(paddingSize);
        }

        // 3. Convertir la clave, el IV y los datos rellenados a WordArray
        const key = CryptoJS.enc.Hex.parse(hexKey);
        const iv = CryptoJS.enc.Hex.parse(hexIv);
        const data = CryptoJS.enc.Hex.parse(paddedHexData);

        // 4. Encriptar usando AES en modo CBC y sin padding
        const encrypted = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.NoPadding // Deshabilitar el padding automático
        });

        // 5. Devolver solo el texto cifrado en formato hexadecimal
        return encrypted.ciphertext.toString(CryptoJS.enc.Hex).toUpperCase();

    } catch (error) {
        console.error("Error en la encriptación AES-CBC:", error);
        return null;
    }
}