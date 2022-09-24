//Producto: Inversion
//Ruta: /app/inversionista/oportunidades
//Disparador: Click en el botón "Invertir" al seleccionar una oportunidad de factoring

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "inversionFactoring.step1_seleccionarOportunidad",
  //PRODUCTO:
  producto: "inversion", // Producto desde cuyo cotizador se inicia el login.
  producto_tipo: "factoring", // Tipo de producto o variante seleccionada previamente en el cotizador

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", //En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  //PERFIL
  operacion_perfil: "Inversionista", // 0 "Inversionista", encaso esté disponible esta información.

  //Oportunidad:
  subasta_codigo: "l7yz6pqt",
  subasta_modelo: "velocidad", // String: Modelo seleccionado de la subasta.
  subasta_moneda: "PEN",
  riesgo_cliente: "C", //String. Riesgo asignado a la subasta.
  rendimiento: "1.35", //String. Rendimiento/TIR. Máximo dos decimales.
  monto_financiar: "20000.00", //String. Monto a financiar.
  pago_fecha: "27/07/2022", // String. Fecha de pago.
  pago_diasAnticipacion: "31", //Entero. Número de días restantes hasta la fecha de pago.

  inversion_moneda: "PEN",
});
