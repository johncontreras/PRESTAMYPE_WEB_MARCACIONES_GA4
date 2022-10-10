//Disparador: Cada vez que se muestre un modal con un mensaje para el usuario.
//Este evento se diferencia del evento prestamype.formError en lo siguiente:
// prestamype.formError es para mensajes debido a errores del sistema (no dependen ni son causados por acciones u omisiones del usuario). 
// prestamype.modales es para mensajes debido a acciones u omisiones directas del usuario (no involucra errores del sistema.). 
//Ruta: Zona Privda /app/

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "prestamype.modales",
  modal_tipo: "/solicitud/datos_personales_1", //Path o ruta de la URL (sin hostname/dominio)
  modal_mensajeUsuario: "Préstamos con garantía hipotecaria y Factoring", //Título del documento actual.
});
