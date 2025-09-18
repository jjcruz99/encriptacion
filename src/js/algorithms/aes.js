// src/js/algorithms/aes.js

export function encryptAES_ECB(hexData, hexKey) {
    const key = CryptoJS.enc.Hex.parse(hexKey);
    const data = CryptoJS.enc.Hex.parse(hexData);

    const encrypted = CryptoJS.AES.encrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.NoPadding
    });

    return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

// NUEVA VERSIÓN DE LA FUNCIÓN DE PADDING
export function encryptAES_ECB_WithPadding(hexData, hexKey) {
    const key = CryptoJS.enc.Hex.parse(hexKey);
    let data = CryptoJS.enc.Hex.parse(hexData);

    // Ajustamos el padding manualmente para que sea de ceros
    const blockSizeBytes = 16;
    const paddingSize = blockSizeBytes - (data.sigBytes % blockSizeBytes);

    // Si el padding no es cero, agregar el padding de ceros
    if (paddingSize > 0 && paddingSize < blockSizeBytes) {
        // Clonamos el WordArray para no modificar el original
        const paddedData = data.clone();
        
        // Creamos un nuevo WordArray de ceros para el padding
        const padding = CryptoJS.lib.WordArray.create([0], paddingSize);
        
        // Concatenamos el padding
        paddedData.concat(padding);
        data = paddedData;
    }

    const encrypted = CryptoJS.AES.encrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.NoPadding
    });

    return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}