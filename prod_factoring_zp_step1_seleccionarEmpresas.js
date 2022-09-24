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
  empresa_propiaId: "2019863245", //Ruc de la empresa propia seleccionada
  empresa_clienteId: "2019863245", //Ruc de la empresa cliente seleccionada
  empresa_nombre: "CONSTRUCTORA INARCO PERU S.A.C.",
});
