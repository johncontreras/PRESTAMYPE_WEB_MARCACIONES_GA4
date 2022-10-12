//Producto: Inversion
//Ruta: /app/inversionista/oportunidades
//Disparador: Cuando se confirma el cambio de inversión exitosamente.

//IMPORTANTE: Es importante que esta evento se dispare DESPUES del evento: inversionFactoring.step4_cambiarInversion


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "inversionFactoring.step5_confirmarcambioInversion",
  //PRODUCTO:
  producto: "inversion", // Producto desde cuyo cotizador se inicia el login.
  producto_tipo: "factoring", // Tipo de producto o variante seleccionada previamente en el cotizador

  //USUARIO:
  user_id: "628c18cc9de1a9674ab8fb20", //En caso este disponible. Id único generado a partir de su DNI.
  user_tipo: "registrado", //registrado: para usuarios registrados en plataforma. "no registrado": para usuarios no registrados.
  visita_tipo: "logueado", //logueado: para usuarios son sesion inicida en plataforma. "no logueado": para usuarios sin sesion iniciada.

  //PERFIL
  operacion_perfil: "Inversionista", // 0 "Inversionista", encaso esté disponible esta información.

  //INSTITUCIONAL o Persona Natural
  operacion_perfilTipo: "Institucional", //Persona Natural o Institucional
  operacion_perfilCategoria: "VIP",
  operacion_perfilRuc: "20984676233", //RUC. solo en caso de perfil Institucional
  operacion_perfilEmpresa: "TALENTO S.A.", //Razon Social de la empresa. solo en caso de perfil Institucional

  //Oportunidad: Datos del cambio en la inversion.
  cliente_nombre: "CONSTRUCTORA INARCO PERU S.A.C.", //Nomre del cliente (organizacion que vende Factura)
  subasta_codigo: "l7yz6pqt-1", // Agregar dinámicamente la cadena -{{n}} al final del código, donde n es un numero correlativo. Ejemplo: agregar -1 cuando es la primera reinversión exitosa. En caso de la segunda reinversion se agregaría -2 (l7yz6pqt-2) y así sucesivamente.
  subasta_modelo: "velocidad", // String: Modelo seleccionado de la subasta.
  subasta_moneda: "PEN",
  riesgo: "C", //String. Riesgo asignado a la subasta.
  rendimiento: "1.35", //String. Rendimiento/TIR. Máximo dos decimales.(1.35% = 1.35)
  monto_financiar: "20000.00", //String. Monto a financiar.
  pago_fecha: "27/07/2022", // String. Fecha de pago.
  pago_diasAnticipacion: "31", //Entero. Número de días restantes hasta la fecha de pago.

  //Inversion: Datos del cambio en la inversion.
  inversion_monto: "9000.00", //String. Monto ingresao a invertir. Maximo dos decimales.
  inversion_moneda: "PEN",
  inversion_id: "xyz123", // String. Id de la transacción. Es importante que sea único por cada operacion. 
  isCompraTotal: "true", //Booleano. Si el usuario marcó el checkbox de Compra total.
});
