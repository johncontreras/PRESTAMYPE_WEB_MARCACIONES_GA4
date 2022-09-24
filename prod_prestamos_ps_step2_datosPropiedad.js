//Producto: Prestamos
//Ruta: en zona pública o zona privada (plataforma)
//Disparador: Al enviarse exitosamente el formulario Datos Personales

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "prestamos.step2_datosPropiedad",
  //PRODUCTO: enviar los campos disponibles.
  producto: "prestamos", // Va en duro
  prestamo_montoSolicitado: "50000.00", // String. Monto de cuota mensual cotizado. Un numero con maximo dos decimales separados por punto.
  prestamo_motivo: "Capital de trabajo", //Construcción, Consolidar Deudas, Traslado de Deuda
  prestamo_modoPago: "Cuota Fija", //Solo intereses, Prestamo puentes, etc
  prestamo_plazo: "36", //En numero de meses. Si eligió 3 años será 36 (3*12=36 meses)
  prestamo_moneda: "PEN", // Código ISO de la moneda. USD para dólares.
  prestamo_cuotaMensual: "1000.00", // String. Monto de cuota mensual cotizado. Un numero con maximo dos decimales separados por punto.
  prestamo_interesMensual: "18.00", // String. Un numero con maximo 2 decimales separados por punto. (18% = 18.00)

  //PERFIL
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.
  
  //USUARIO:
  user_email: "johnalex.cs@gmail.com", //email ingresado en el formulario.
  user_tipoDocumento: "DNI",
  user_numDocumento: "43582572",
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  lead_id: "628c18cc9de1a9674ab8fb20", // Id del usuario generado desde su email medainte SHA256
  user_telefono1: "946346772",
  user_telefono2: "940663173",
  user_tienePropiedad: "Sí tiene propiedad", // "No tiene propiedad", segun la opción seleccionada.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  //PROPIEDAD:
  prop_tipo: "Casa", //Tipo de propiedad seleccionada
  prop_registroSunarp: "Registro SUNARP", // "No registro SUNARP", "No sabe registro SUNARP".
  prop_region: "Lima",
  prop_provincia: "Lima",
  prop_distrito: "Santa Anita",
  prop_asfaltado: "No asfaltado", // "Asfaltado", etc.
  prop_cercaCerro: "Cerca de un cerro", // "No cerca de un cerro", etc.
  prop_parteCerro: "Parte Plana", // "Parte alta", etc.
  prop_area: "240.00", // String. Monto de cuota mensual cotizado. Un numero con maximo dos decimales separados por punto.
 
});
