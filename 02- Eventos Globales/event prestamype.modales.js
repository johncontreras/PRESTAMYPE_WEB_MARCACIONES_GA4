//Disparador: Cada vez que se muestre un modal con un mensaje para el usuario.
//Este evento se diferencia del evento prestamype.formError en lo siguiente:
// prestamype.formError es para mensajes debido a errores del sistema (no dependen ni son causados por acciones u omisiones del usuario). 
// prestamype.modales es para mensajes debido a acciones u omisiones directas del usuario (no involucra errores del sistema.). 
//Ruta: Zona Privda /app/

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "prestamype.modales",
modal_mensajePrincipal: "Tú cámara no está activa", // Mensaje principal o título del modal.  En caso incluya algún dato del usuario, como su nombre, debe ser reemplazado por un texto genérico. Ejemplo1: el mensaje "Jimmy, tu cambio de inversión se realizó con éxito" debe ser reemplazado por "Usuario, tu cambio de inversión se realizó con exito." Ejemplo2: el mensaje "El monto ingresado debe ser mayor a S/1700", debe ser remplazado por "El monto ingresado debe ser mayor a N "
modal_mensajeSecundario: "Por favor recarga la página, y acepta los permisos de tu cámara. ", //En caso esté disponible. También debe reemplzarse datos del relacionados al usuario (nombres,montos) por textos genericos.
//PRODUCTO: Ensaso esten dispibles
producto: "inversion", // Producto en cuyo plujo de mostró el modal
producto_tipo: "factoring", // En caso esté disponible
//INSTITUCIONAL o Persona Natural: En caso esté disponible
operacion_perfilTipo: "Institucional", //Persona Natural o Institucional
});

