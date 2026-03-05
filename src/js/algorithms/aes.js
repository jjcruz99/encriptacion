
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
        
        const cleanedHexData = hexData.replace(/\s/g, '');

        const blockSizeHex = 32; // 16 bytes en hexadecimal
        let paddedHexData = cleanedHexData;

        if (paddedHexData.length % blockSizeHex !== 0) {
            const paddingSize = blockSizeHex - (paddedHexData.length % blockSizeHex);
            paddedHexData = paddedHexData + '0'.repeat(paddingSize);
        }

        const key = CryptoJS.enc.Hex.parse(hexKey);
        const data = CryptoJS.enc.Hex.parse(paddedHexData);

        const encrypted = CryptoJS.AES.encrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding
        });

        return encrypted.ciphertext.toString(CryptoJS.enc.Hex).toUpperCase();

    } catch (error) {
        console.error("Error en la encriptación AES-ECB:", error);
        return null;
    }
}

export function encryptAES_CBC(hexData, hexKey, hexIv) {
    try {
   
        const cleanedHexData = hexData.replace(/\s/g, '');

        const blockSizeHex = 32;
        let paddedHexData = cleanedHexData;

        if (paddedHexData.length % blockSizeHex !== 0) {
            const paddingSize = blockSizeHex - (paddedHexData.length % blockSizeHex);
            paddedHexData = paddedHexData + '0'.repeat(paddingSize);
        }

        const key = CryptoJS.enc.Hex.parse(hexKey);
        const iv = CryptoJS.enc.Hex.parse(hexIv);
        const data = CryptoJS.enc.Hex.parse(paddedHexData);

        const encrypted = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.NoPadding 
        });

        return encrypted.ciphertext.toString(CryptoJS.enc.Hex).toUpperCase();

    } catch (error) {
        console.error("Error en la encriptación AES-CBC:", error);
        return null;
    }
}

export function decryptAES_ECB_CustomZeroPadding(encryptedHex, hexKey) {
    try {
        const key = CryptoJS.enc.Hex.parse(hexKey);
        
        const cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Hex.parse(encryptedHex)
        });

        const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.NoPadding
        });

        return decrypted.toString(CryptoJS.enc.Hex).toUpperCase();
    } catch (error) {
        console.error("Error en la desencriptación AES-ECB:", error);
        return null;
    }
}

export function decryptAES_CBC(encryptedHex, hexKey, hexIv) {
    try {
        const key = CryptoJS.enc.Hex.parse(hexKey);
        const iv = CryptoJS.enc.Hex.parse(hexIv);
        
        const cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Hex.parse(encryptedHex)
        });

        const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.NoPadding
        });

        return decrypted.toString(CryptoJS.enc.Hex).toUpperCase();
    } catch (error) {
        console.error("Error en la desencriptación AES-CBC:", error);
        return null;
    }
}
