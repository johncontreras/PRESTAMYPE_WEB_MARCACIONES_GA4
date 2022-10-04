## LOGIN:

***********************************
## OBSERVACIONES:
Seguir las recomendaciones generales de **heredar los valores de los parametros de eventos anteriores**, en especial para los eventos de login y registro. [Ver Observaciones Generales](/README.md)
********************************

### Evento: [login](/03-%20Registro%20y%20Login/event%20login.js)
![](/03-%20Registro%20y%20Login/images/login.png)
####  Ruta:
 Global: todoas las zonas, todos los sitios.
####  Objetivo: 
 Medir los inicios de sesión exitosos.
####  Disparadores: 
  *  Al **iniciar sesión** exitosamente en la plataforma

****************************************************************
## REGISTRO:
####  Objetivo: 
 Medir los registros exitosos.

### Evento: [registro.step0_signUp](/03-%20Registro%20y%20Login/event%20registro.step0_signUp.js)
![](/03-%20Registro%20y%20Login/images/step0.png)
####  Ruta:
 /registro
####  Disparadores: 
  * Al enviarse correctamente el formulario de Registrate.

### Evento: [registro.step1_verificarCorreo](/03-%20Registro%20y%20Login/event%20registro.step1_verificarCorreo.js)
![](/03-%20Registro%20y%20Login/images/step1.png)
####  Ruta:
 /verificar-correo/{{token}}
####  Disparadores: 
  * Al verificarse el correo electrónico exitosamente.

### Evento: [registro.step2_completarDatos](/03-%20Registro%20y%20Login/event%20registro.step2_completarDatos.js)
![](/03-%20Registro%20y%20Login/images/step2.png)
####  Ruta:
  /app/{{operacion_perfil}}/completar-datos
####  Disparadores: 
  * Al guardarse exitosamente los datos personales, como empresario o inversionista.

### Evento: [registro.step3_subirDocumentos](/03-%20Registro%20y%20Login/event%20registro.step3_subirDocumentos.js)
![](/03-%20Registro%20y%20Login/images/step3.png)
####  Ruta:
 /app/{{operacion_perfil}}/completar-datos
####  Disparadores: 
  * Al subirse y procesar exitosamente las fotos del DNI subidas, como empresario o inversionista

### Evento: [registro.step4_agregarCuenta](/03-%20Registro%20y%20Login/event%20registro.step4_agregarCuenta.js)
![](/03-%20Registro%20y%20Login/images/step4.png)
####  Ruta:
  /app/{{operacion_perfil}}/completar-datos
####  Disparadores: 
  * Al guardarse exitosamente la cuenta bancaria agregada, como empresario o inversionista

