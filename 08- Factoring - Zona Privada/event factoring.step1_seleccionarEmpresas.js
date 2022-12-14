//Producto: Factoring
//Ruta: /app/empresario/vender-facturas
//Disparador: Al dar click en "Continuar" luego de seleccionar la empresa propia y del cliente.

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "factoring.step1_seleccionarEmpresas",
  //PRODUCTO:
  producto: "factoring",

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  //PERFIL
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.

  //EMPRESAS:
  organization_id: "628c18cc9de1a9674ab8fb20628c18cc9de1a9674ab8fb20", //RUC del Proveedor.en SHA256
  organization_client_id: "428dfgdfgc9de1a9674ab8fb20as5f5t1d2se9", // RUC del cliente del proveedor. em SHA256
});
