/** 
* Envia notoificaciones y alertas al usuario 
* @param {string} mensaje
* @param {string} tipo
*/

//Notificaciones
export function mostrarToast(mensaje, tipo = 'info') {
  Toastify({
    text: mensaje,
    duration: tipo === 'error' ? 4000 : 2000,
    gravity: "top", // `top` or `bottom`
    position: tipo === 'error' ? "center" : "right", // `left`, `center` or `right`
    backgroundColor: tipo === 'error' ? "linear-gradient(to right, #FF416C, #FF4B2B)" : "#44A1F2", // Color de fondo
    className : "mi-toast"
  }).showToast();
}

//Mensajes en linea
export function mostrarMensajeError(indice) {
  const selectorMensaje = `mensaje-linea-${indice}`

  switch (indice) {
    case 1:
        document.getElementById(selectorMensaje).textContent = "Digite el número de la TC o cedula que desea encriptar.";
        break;
    case 2:
        document.getElementById(selectorMensaje).textContent = "Digite la llave de 16 bits en Hexadecimal.";
        break;
    case 3:
        document.getElementById(selectorMensaje).textContent = "Digite el número de la TC, debe contener 16 numeros.";
        break;
    case 4:
        document.getElementById(selectorMensaje).textContent = "Digite la clave de la TC, debe contener 4 numeros.";
        break;
    case 5:
        document.getElementById(selectorMensaje).textContent = "Digite la llave en HEX de 16 bits.";
        break;
    case 6:
        document.getElementById(selectorMensaje).textContent = "Digite la llave en HEX de 16 bits.";
        break;
    case 7:
        document.getElementById(selectorMensaje).textContent = "Digite el vector de 8 bits";
        break;
    case 8:
        document.getElementById(selectorMensaje).textContent = "Digite un dato ejm: 25DC";
        break;
    case 9:
        document.getElementById(selectorMensaje).textContent = "Digite un dato ejm: 25DC";
        break;
    default:
        break;
  }
  
}

export function ocultarMensajeError(indice) {
    const selectorMensaje = `mensaje-linea-${indice}`

    switch(indice){
        case 1:
             document.getElementById(selectorMensaje).textContent = "";
        break;
         case 2:
             document.getElementById(selectorMensaje).textContent = "";
        break;
    case 3:
        document.getElementById(selectorMensaje).textContent = "";
        break;
    case 4:
        document.getElementById(selectorMensaje).textContent = "";
        break;
    case 5:
        document.getElementById(selectorMensaje).textContent = "";
        break;
    case 6:
        document.getElementById(selectorMensaje).textContent = "";
        break;
    case 7:
        document.getElementById(selectorMensaje).textContent = "";
        break;
    case 8:
        document.getElementById(selectorMensaje).textContent = "";
        break;
    case 9:
        document.getElementById(selectorMensaje).textContent = "";
        break;
        default:
        break;
    }

  
}