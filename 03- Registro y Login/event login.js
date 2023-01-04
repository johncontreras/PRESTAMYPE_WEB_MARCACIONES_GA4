//Disparador: Al iniciar Sesion correctamente

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "login",
  //PRODUCTO
  producto: "factoring", // Producto desde cuyo cotizador se inicia el login.
  producto_tipo: "prestamos", // Tipo de producto o variante seleccionada previamente en el cotizador

  //PERFIL:
  operacion_perfil: "Inversionista", // o "Empresario", encaso esté disponible esta información.

  //USUARIO:
  user_email: "johnalex.cs@gmail.com", //email ingresado en el formulario.
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.
  user_inversiones: 2, //Número entero. Número de inversiones previas realizadas.
  user_subastas:0,//Número entero. Número de subastas previas realizadas.
  user_recurrente: true, //Booleano: Si tiene  operaciones (inversiones o subastas) previas: true, si no tiene operaciones previas: false
});
