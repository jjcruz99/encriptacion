
/**
 * Encripta un dato con 3DES en CBC
 * @param {string} pinAnsi
 * @param {string} key
 * @param {string} iv
 * @returns {string} pinblock
 */
export function TripleDES_CBC(pinAnsi, key, iv) {
    try {
        
        const keyHex = CryptoJS.enc.Hex.parse(key);
        const ivHex = CryptoJS.enc.Hex.parse(iv);
        const pinAnsiHex = CryptoJS.enc.Hex.parse(pinAnsi);

        // Encriptar utilizando CryptoJS
        const encrypted = CryptoJS.TripleDES.encrypt(
          pinAnsiHex, 
          keyHex,
          {
            iv: ivHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.NoPadding 
          }
        );

        
        return encrypted.ciphertext.toString(CryptoJS.enc.Hex).toUpperCase(); 
    } 
    catch (error) {
      console.log("Error al encriptar: " + error);
      return null;
    }
}