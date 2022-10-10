//Producto: Cambio de Divisas
//Ruta: app/inversionista/estado-cuenta
//Disparador: Cuando se confirma exitosamente un cambio de divisas

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "exchange.step1_confirmacionCambioDivisas",
  //PRODUCTO:
  producto: "Cambio de Divisas", // Producto desde cuyo cotizador se inicia el login.

  //OPERACION ENVIADO
  envio_moneda: "PEN", //Codigo ISO de moneda del monto que se envia para la operacion
  envio_monto: "1250.00", //Con dos decimales y separado por un punto.
  //OPERACION RECIBIDO
  recibo_moneda: "USD", //Codigo ISO de moneda del monto en que recibe la operacion
  recibo_monto: "3989.00", //Con dos decimales y separado por un punto.
  //OPERACION
  operacion_tc:"3.95", // Tipo de cambio aplicado. Separado por punto y limitado a dos decimales (sin redondeo). Si el tipo de cambio es 3.9598, el valor sería 3.95
  operacion_id:"abc123", //Debe ser un código único por cada operación para poder diferenciarlos. Máximo 10 dígitos.

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", //En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  //PERFIL
  operacion_perfil: "Inversionista", // 0 "Inversionista", encaso esté disponible esta información.

  //INSTITUCIONAL o Persona Natural
  operacion_perfilTipo: "Institucional", //Persona Natural o Institucional
  operacion_perfilRuc: "20984676233", //RUC. solo en caso de perfil Institucional
  operacion_perfilEmpresa: "TALENTO S.A.", //Razon Social de la empresa. solo en caso de perfil Institucional

});
