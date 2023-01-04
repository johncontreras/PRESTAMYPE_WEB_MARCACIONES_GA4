//Producto: Inversion
//Ruta: el form en ZONA PRIVADA
//Disparador: Click en el botón "Informate aquí"

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "inversionPrestamos.step0_solicitarInformacion",
  //PRODUCTO:
  producto: "garantia_hipotecaria", // Producto desde cuyo cotizador se inicia el login.
  producto_tipo: "prestamos", // Tipo de producto o variante seleccionada previamente en el cotizador
  inversion_moneda: "PEN",
  inversion_monto: "15000.00", //String. Monto de factura con dos decimales separados por un punto.
  inversion_montoRecibir: "685.00", //String. Monto a recibir con dos decimales separados por un punto.
  inversion_rentabilidad: "18.00", // String. Un numero con maximo dos decimales separados por punto. (18% = 18.00)
  inversion_plazo: "3", //En numero de meses seleccionado. Si eligió 3 años será 36 (3*12=36 meses)

  //PERFIL
  operacion_perfil: "Inversionista", // 0 "Inversionista", encaso esté disponible esta información.

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", //En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.
  user_tipoDocumento: "DNI",
  user_numDocumento: "43582572",
  user_email: "johnalex.cs@gmail.com", //email ingresado en el formulario.
  user_telefono1: "946346772",
});
