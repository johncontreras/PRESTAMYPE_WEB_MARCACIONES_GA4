//Producto: Inversion
//Ruta: /invertir-factoring
//Disparador: Click en el botón "Simula tu Inversion"

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "inversionFactoring.step0_iniciarSimulacion",
  
  //PRODUCTO:
  producto: "inversion", // Producto desde cuyo cotizador se inicia el login.
  producto_tipo: "factoring", // Tipo de producto o variante seleccionada previamente en el cotizador

  //PERFIL:
  operacion_perfil: "Inversionista", // 0 "Inversionista", encaso esté disponible esta información.

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", //En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado" //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.
});
