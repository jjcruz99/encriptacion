function xorStrings(text, key) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    // Obtiene el código del caracter del texto
    const textCharCode = text.charCodeAt(i);
    
    // Obtiene el código del caracter de la clave (repitiéndola si es necesario)
    const keyCharCode = key.charCodeAt(i % key.length);

    // Realiza la operación XOR y convierte el resultado de nuevo a un caracter
    result += String.fromCharCode(textCharCode ^ keyCharCode);
  }
  return result;
}

// --- Ejemplo de uso ---
const mensajeOriginal = "Hola Mundo";
const clave = "secreto";

const mensajeCifrado = xorStrings(mensajeOriginal, clave);
console.log("Cifrado:", mensajeCifrado);

// Para descifrar, se aplica la misma operación con la misma clave
const mensajeDescifrado = xorStrings(mensajeCifrado, clave);
console.log("Descifrado:", mensajeDescifrado);