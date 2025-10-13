
/**
 * Encripta un dato con 3DES en CBC
 * @param {string} pinAnsi
 * @param {string} key
 * @param {string} iv
 * @returns {string} pinblock
 */
export function generarPinblock(pinAnsi, key, iv) {
  try {
    // Convertir los datos a WordArray de CryptoJS, interpretando como hexadecimal
    const keyHex = CryptoJS.enc.Hex.parse(key);
    const ivHex = CryptoJS.enc.Hex.parse(iv);

    // Convertir el pinAnsi a WordArray también (asumiendo que es hexadecimal)
    const pinAnsiHex = CryptoJS.enc.Hex.parse(pinAnsi);

    // Encriptar utilizando CryptoJS
    const encrypted = CryptoJS.TripleDES.encrypt(
      pinAnsiHex, 
      keyHex,
      {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.NoPadding // Importante:  Eliminamos el padding
      }
    );

    // Devolver el texto cifrado en formato hexadecimal
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex).toUpperCase(); // Convertir a hexadecimal y mayúsculas
  } catch (error) {
    console.log("Error al encriptar: " + error);
    return null;
  }
}