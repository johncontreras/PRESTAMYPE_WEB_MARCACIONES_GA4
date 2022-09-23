//Ruta: En todo el sitio
//Disparador: Al ocurrir un error al enviar un formulario (incluyendo calculadoras/cotizadores/simuladores)

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "prestamype.formError", // Este valor va en duro.
  error_tipo: "API error", // Usar la momenclatura de error que usen internamente para los tipos de errores.
  error_codigo: "GET 200", // Usar la codificacion que usen internamente para los tipos de errores.
  error_endpoint: "nombre del endpoint",
  error_mensajeUsuario: "No podemos verificar el númeno de su DNI. Intente más tarde", //mesaje mostrado al usuario, en caso se muestre alguno.
  error_descripcionTecnica: "api/reniec/validation", // Descripcion tecnica del error, en caso se muestre alguno.
});
