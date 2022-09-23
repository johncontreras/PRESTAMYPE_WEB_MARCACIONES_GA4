//Producto: Prestamos
//Ruta: en zona pública o zona privada (plataforma)
//Disparador: Al dar click en el boton "Precalificar Ahora"

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "prestamos.step0_cotizar",
  //PRODUCTO: enviar los campos disponibles.
  producto: "prestamos", // Va en duro
  prestamo_montoSolicitado: "50000.00", // String. Monto de cuota mensual cotizado. Un numero con maximo dos decimales separados por punto.
  prestamo_motivo: "Capital de trabajo", //Construcción, Consolidar Deudas, Traslado de Deuda
  prestamo_moneda: "PEN", // Código ISO de la moneda. USD para dólares.
  prestamo_interesMensual: "18.00", // String. Un numero con maximo dos decimales separados por punto. (18% = 18.00)

  //PERFIL
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  lead_id: "628c18cc9de1a9674ab8fb20", // Id del usuario generado desde su email medainte SHA256
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.
});
