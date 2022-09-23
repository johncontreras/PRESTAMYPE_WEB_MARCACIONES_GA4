
//Ruta: /app/{{operacion_perfil}}/completar-datos
//Disparador: Al guardar exitosamente la cuenta bancaria agregada.

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "registro.step4_agregarCuenta",

  //PERFIL:
  operacion_perfil: "Inversionista", // 0 "Empresario", encaso esté disponible esta información.

  //USUARIO:
  user_email: "johnalex.cs@gmail.com", //email ingresado en el formulario.
  user_tipoDocumento: "DNI",
  user_numDocumento: "43582572",
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  user_telefono1: "946346772",
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  // CUENTA:
  cuenta_banco: "BCP", // Nombre de banco.
  cuenta_tipo: "Cuenta Corriente", // Cuenta Corriente, Cuenta de Ahorro, etc
  cuenta_moneda: "PEN", // USD, EUR, etc
});
