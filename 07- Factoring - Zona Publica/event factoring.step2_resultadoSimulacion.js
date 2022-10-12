//Producto: Factoring
//Perfil: Empresario
//Ruta: /factoring
//Disparador: Al mostrarse el resultado de la simulacion

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "factoring.step2_resultadoSimulacion",

  //PRODUCTO:
  producto: "factoring",
  factoring_moneda: "PEN",
  factoring_facturaMonto: "1000.00", //String. Monto de factura con dos decimales separados por un punto.
  factoring_montoRecibir: "878.00", //String. Monto a recibir con dos decimales separados por un punto.
  factoring_facturaVencimiento: "27/07/2022", // String. Fecha de vencimiento de la factura.
  factoring_diasAnticipacion: "48", // Integer. Numero de dias para el vencimmiento de la factura. Fecha Vencimiento - Hoy()

  //PERFIL
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  lead_id: "628c18cc9de1a9674ab8fb20", // Id del usuario generado desde su email medainte SHA256
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.
  user_email: "johnalex.cs@gmail.com", //email ingresado en el formulario.
  user_telefono1: "946346772",

  //EMPRESAS:
  organization_id: "628c18cc9de1a9674ab8fb20628c18cc9de1a9674ab8fb20", //RUC del Proveedor.en SHA256
  organization_client_id: "428dfgdfgc9de1a9674ab8fb20as5f5t1d2se9", // RUC del cliente del proveedor. em SHA256


});
