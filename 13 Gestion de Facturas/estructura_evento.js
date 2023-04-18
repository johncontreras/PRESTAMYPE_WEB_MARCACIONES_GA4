window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: "<Indicador>", // Aplica a todos los eventos.
    seccion: "Por Cobrar", // o Por Pagar, Reportes. Aplica a todos los eventos.
    flujo: "Flujo de Registro", // Aplica a todos los eventos.

    empresa: {
        //info de empresa usuaria de Prestamype:
        id: "",
    },
    carga_facturas: {
        total_subidas: 10,
        exitosas: 5,
        erroneas: 5,
        tipificacion: "No es formato XML", // Error más común. El que afecta la mayor cantidad de facturas.
    },
    empresa_relacionada: {
        //info del cliente (Por Pagar) o Proveedor (Por Cobrar):
        tipo_relacion: "proveedor",
        id: "",
    },
    solicitud: {
        facturas: 1,
        tipo_solicitud: "financiamiento",
        modalidad: "costo", // o velocidad
    },
});

