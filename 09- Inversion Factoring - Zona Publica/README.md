## INVERSION en FACTORING en Zona Publica:

***********************************
## OBSERVACIONES:
1.  El campo inversion_plazo regresa un valor null en todos los pasos. Debe regresar el número de meses
```
  Ejemplo: 
    inversion_plazo: "3", //En numero de meses seleccionado. Si eligió 3 años será 36 (3*12=36 meses)

    nombre de evento DEBE DECIR: inversionFactoring.step1_formSimulacion
```

********************************

####  Objetivo: 
  * Medir la cantidad de simulaciones de inversion en factoring en la zona publica

####  Ruta:
* /invertir-factoring 

### Evento: [inversionFactoring.step0_iniciarSimulacion](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/event%20inversionFactoring.step0_iniciarSimulacion.js)
![](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/images/step0.png)

####  Disparador: 
  * Click en el botón **"Simula tu inversión"**

### Evento: [inversionFactoring.step1_formSimulacion](/07-%20Factoring%20-%20Zona%20Publica/event%20factoring.step1_formSimulacion.js)
![](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/images/step1.png)

####  Disparador: 
  * Al completar los campos con datos válidos y dar click en el botón **"Simular"**

### Evento: [inversionFactoring.step2_resultadoSimulacion](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/event%20inversionFactoring.step2_resultadoSimulacion.js)
![](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/images/step2.png)

####  Disparador: 
  * Al mostrarse los resultados de la simulación.