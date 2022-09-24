//Producto: Factoring
//Ruta: /app/empresario/vender-facturas
//Disparador: Al confirmarse la venta exitosa de la factura.

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "factoring.step3_confirmacionFactoring",
  
  //PRODUCTO:
  producto: "factoring",

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  //PERFIL
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.

  //EMPRESAS:
  empresa_propiaId: "2019863245", //Ruc de la empresa propia seleccionada
  empresa_clienteId: "2019863245", //Ruc de la empresa cliente seleccionada
  empresa_nombre: "CONSTRUCTORA INARCO PERU S.A.C.",

  //FACTURA:
  factoring_moneda: "PEN",
  factoring_facturaMonto: "50000.00", //String. Monto de factura con dos decimales separados por un punto.
  factoring_facturaPendiente: "20000.00", //String. Monto pendiente de pago de factura. con dos decimales separados por un punto.
  factoring_facturaVencimiento: "27/07/2022", // String. Fecha de vencimiento de la factura.
  factoring_diasAnticipacion: "48", // Integer. Numero de dias para el vencimmiento de la factura. Fecha Vencimiento - Hoy()

  //SUBASTA:
  subasta_codigo: "l7yz6pqt",
  subasta_modelo: "velocidad", // String: Modelo seleccionado de la subasta.
  riesgo_cliente: "C", //String. Riesgo asignado a la subasta.
  rendimiento: "1.35", //String. Rendimiento/TIR. Máximo dos decimales (1.35% = 1.35).
  monto_financiar: "20000.00", //String. Monto a financiar.
  pago_fecha: "27/07/2022", // String. Fecha de pago.
  pago_diasAnticipacion: "31", //Entero. Número de días restantes hasta la fecha de pago.
});
