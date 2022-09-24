//Disparador: Cada vez que se cambie de vista (cada vez que haya un cambio en la URL).

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "virtualPageView",
  virtualPagePath: "/solicitud/datos_personales_1", //Path o ruta de la URL (sin hostname/dominio)
  virtualPageTitle: "Préstamos con garantía hipotecaria y Factoring", //Título del documento actual.
});
