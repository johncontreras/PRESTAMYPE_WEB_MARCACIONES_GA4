## EVENTOS PRESTAMOS:

####  Objetivo: 
 Medir las solicitudes de Prestamo en Zona Publica.
####  Ruta:
* /prestamos
* /prestamos/{{motivo de prestamos}}

### Evento: [prestamos.step0_cotizar](/04-%20Prestamos%20-%20Zona%20Publica/event%20prestamos.step0_cotizar.js)
![](/04-%20Prestamos%20-%20Zona%20Publica/images/step0.png)

####  Disparador: 
  * Cada vez que se realiza una cotización exitosa en el simulador dando click en el botón Precalifica Ahora.

### Evento: [prestamos.step1_datosPersonales](/04-%20Prestamos%20-%20Zona%20Publica/event%20prestamos.step1_datosPersonales.js)
![](/04-%20Prestamos%20-%20Zona%20Publica/images/step1.png)

####  Disparador: 
  * Cada vez que se envía exitosamente el formulario Datos Personales.

### Evento: [prestamos.step2_datosPropiedad](/04-%20Prestamos%20-%20Zona%20Publica/event%20prestamos.step2_datosPropiedad.js)
![](/04-%20Prestamos%20-%20Zona%20Publica/images/step2.png)

####  Disparador: 
  * Cada vez que se envía exitosamente el formulario Datos de Propiedad

### Evento: [prestamos.step3_resultadosPrecalificacion](/04-%20Prestamos%20-%20Zona%20Publica/event%20prestamos.step3_resultadosPrecalificacion.js)


####  Disparador: 
  * Cada vez que se obtiene un resultado y se muestra en pantalla.