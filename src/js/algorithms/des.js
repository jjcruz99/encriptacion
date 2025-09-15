// src/js/algorithms/des.js

// Usa las funciones de la librería CryptoJS
// que se cargó en el HTML
export function encryptDES(message, key) {
    return CryptoJS.DES.encrypt(message, key).toString();
}

export function decryptDES(encryptedMessage, key) {
    const bytes  = CryptoJS.DES.decrypt(encryptedMessage, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}