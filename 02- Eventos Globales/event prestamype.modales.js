//Disparador: Cada vez que se muestre un modal con un mensaje para el usuario.
//Este evento se diferencia del evento prestamype.formError en lo siguiente:
// prestamype.formError es para mensajes debido a errores del sistema (no dependen ni son causados por acciones u omisiones del usuario). 
// prestamype.modales es para mensajes debido a acciones u omisiones directas del usuario (no involucra errores del sistema.). 
//Ruta: Zona Privda /app/

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "prestamype.modales",
  modal_categoria: "Datos Faltantes", //posibles valores: Informativo, Datos Faltantes, Datos Incorrectos, Alerta

  modal_mensajeUsuario: "Tú cámara no está activa" // Mensaje principal del modal.  En caso incluya algún dato del usuario, como su nombre, debe ser reemplazado por un texto genérico. Ejemplo1: el mensaje "Jimmy, tu cambio de inversión se realizó con éxito" debe ser reemplazado por "Usuario, tu cambio de inversión se realizó con exito." Ejemplo2: el mensaje "El monto ingresado debe ser mayor a S/1700", debe ser remplazado por "El monto ingresado debe ser mayor a N "
});

