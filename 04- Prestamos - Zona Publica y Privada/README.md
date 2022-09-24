## EVENTOS PRESTAMOS:

####  Objetivo: 
 Medir las solicitudes de Prestamos en Zona Publicas y Zona Privada.

####  Ruta:
* /prestamos
* /prestamos/{{motivo de prestamos}}

### Evento: [prestamos.step0_cotizar](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/event%20prestamos.step0_cotizar.js)
![](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/images/step0.png)

####  Disparador: 
  * Cada vez que se realiza una cotización exitosa en el simulador dando click en el botón Precalifica Ahora.

### Evento: [prestamos.step1_datosPersonales](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/event%20prestamos.step1_datosPersonales.js)
![](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/images/step1.png)
![](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/images/step1_zp.png)

####  Disparador: 
  * Cada vez que se envía exitosamente el formulario Datos Personales.

### Evento: [prestamos.step2_datosPropiedad](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/event%20prestamos.step2_datosPropiedad.js)
![](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/images/step2.png)
![](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/images/step2_zp.png)

####  Disparador: 
  * Cada vez que se envía exitosamente el formulario Datos de Propiedad

### Evento: [prestamos.step3_resultadosPrecalificacion](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/event%20prestamos.step3_resultadosPrecalificacion.js)
![](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/images/step3.png)
####  Disparador: 
  * Cada vez que se obtiene un resultado y se muestra en pantalla.