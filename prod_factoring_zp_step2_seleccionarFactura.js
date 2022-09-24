//Producto: Factoring
//Ruta: /app/empresario/vender-facturas
//Disparador: Al dar click en "Continuar" luego de seleccionar una factura válida.

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "factoring.step2_seleccionarFactura",
  //PRODUCTO:
  producto: "factoring",

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  //PERFIL
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.
  
  //EMPRESA:
  empresa_propiaId: "2019863245", //Ruc de la empresa propia seleccionada
  empresa_clienteId: "2019863245", //Ruc de la empresa cliente seleccionada
  empresa_nombre: "CONSTRUCTORA INARCO PERU S.A.C.",

  //FACTURA:
  factoring_moneda: "PEN",
  factoring_facturaMonto: "50000.00", //String. Monto de factura con dos decimales separados por un punto.
  factoring_facturaPendiente: "20000.00", //String. Monto pendiente de pago de factura. con dos decimales separados por un punto.
  factoring_facturaVencimiento: "27/07/2022", // String. Fecha de vencimiento de la factura.
  factoring_diasAnticipacion: "48", // Integer. Numero de dias para el vencimmiento de la factura. Fecha Vencimiento - Hoy()
});
