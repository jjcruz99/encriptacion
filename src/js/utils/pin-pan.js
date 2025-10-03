/**
 * Calcula el PIN y el PAN
 * @param {string} numeroTarjeta 16 caracteres
 * @param {string} clave 4 caracteres
 * @returns {string} El pin anasi
 */

export function pinPan(numeroTarjeta,clave){
    try{
     
      let pin=`04${clave}FFFFFFFFFF`;
      let pan=`0000${numeroTarjeta.slice(3,15)}`;
      return pin+pan;
    }
    catch(error)
    {
        console.log(`Error al generar pinAnsi ${error}`);
    }
}