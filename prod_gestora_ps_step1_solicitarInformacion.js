//Ruta: https://www.prestamype.com/asset-management
//Disparador: Al enviar exitosamente el formulario titulado: ¿Interesado en conocer más sobre nuestros vehículos de inversión?

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "gestora.step1_solicitarInformacion", // Este valor va en duro.
  operacion_id: "xyz123", // Código único generado al guardar exisosamente el registro.
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.
  producto: "gestora", // Este valor va en duro

  //PERFIL
  operacion_perfil: "Empresario", // 0 "Inversionista", encaso esté disponible esta información.

  //USUARIO:
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.
  user_email: "johnalex.cs@gmail.com", //email ingresado en el formulario.
  lead_id: "628c18cc9de1a9674ab8fb20", // Id del usuario generado desde su email medainte SHA256
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  user_id: "628c18cc9de1a9674ab8fb20", // En caso este disponible. Id único generado a partir de su DNI.
  user_tipoDocumento: "DNI",
  user_numDocumento: "43582572",
  user_telefono1: "946346772"
});



