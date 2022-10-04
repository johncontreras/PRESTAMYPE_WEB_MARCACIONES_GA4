# PRESTAMYPE: Marcaciones para Migración a GA4

## Contexto: 
En el código del sitio se tiene desplegado directamente los scripts de Google Analytics Universal y el código base de Google Tag Manager:

* Script de Google Analytics: envía interacciones de página vista directamente a la propiedad/cuenta UA-89673196-1. No es gestionada por Google Tag Manager y debe ser retirada ya que _**las páginas vistas serán medidas por el evento virtualPageView**_.
* Script de Google Tag Manager: se tiene desplegado el contenedor **GTM-MBHLDNH** y gestiona todos los tags del ambiente de producción. Debe conservarse y usar el mismo contenedor en todos los demás ambientes (Test, Dev).

## Zonas:
| Zona                        | Ruta del Proyecto                                                    |
| --------------------------- |:------------------------------------------------------------------:  |
| Publica                     | [https://www.prestamype.com/](https://www.prestamype.com/)           |
| Privada (Plataforma)        | [https://www.prestamype.com/app/](https://www.prestamype.com/app/)   |

## Lista de nuevas marcaciones por Producto y Zona:
|Nº  | Estado     | Producto            | Zona             | Marcaciones                                                             |
| -- |:---------: | :-----------------: |:----------------:|:-----------------------------------------------------------------------:|
| 01 | OK     | --                  | --               | [Google Tag Manager](/01-%20Google_Tag_Manager.html)                     |
| 02 | Observaciones     | --                  | --               | [Eventos Globales](/02-%20Eventos%20Globales/)                             |
| 03 | Observaciones     | Todos               | Todos            | [Registro y Login](/03-%20Registro%20y%20Login/)                             |
| 04 | OK     | Prestamos           | Publica y Privada| [Prestamos - Publica y Plataforma](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/) |
| 05 | OK     | Invertir Prestamos  | Publica          | [Invertir Prestamos - Publica](/05-%20Inversion%20Prestamos%20-%20Zona%20Publica/)  |
| 06 | OK     | Invertir Prestamos  | Privada          | [Invertir Prestamos - PLataforma](/06-%20Inversion%20Prestamos%20-%20Zona%20Privada/) |
| 07 | OK     | Factoring           | Publica          | [Factoring - Publica](/07-%20Factoring%20-%20Zona%20Publica/)                         |
| 08 | Pendiente     | Factoring           | Privada          | [Factoring - Plataforma](/08-%20Factoring%20-%20Zona%20Privada/)                     |
| 09 | Observaciones     | Invertir Factoring  | Publica          | [Invertir Factoring - Publica](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/)   |
| 10 | Pendiente     | Invertir Factoring  | Privada          | [Invertir Factoring - Plataforma](/10-%20Inversion%20Factoring%20-%20Zona%20Privada/) |
| 11 | OK     | Gestora             | Publica          | [Gestora - Publica](/11-%20Gestora%20-%20Zona%20Publica/)                             |

***********************************
## OBSERVACIONES GENERALES:
1.  Los **parámetros de moneda** deben contener códigos ISO de moneda (PEN para Soles Peruanos, USD para Dolar Estadounidense).
```
  Ejemplo: factoring_moneda: 'PEN', 
```
2.  Mantener el valor de los parametros/variables pre-existentes en el dataLayer para ser disparados en todos los eventos que lo requieran. 
```
// Ejemplo: Primero el usuario dispara el evento: inversionPrestamos.step0_solicitarInformacion
y luego dispara el evento registro.step0_signUp.
Dado que ambos eventos tienen parámetros en común, estós parametros deben mantenerse (persistir)
entre los eventos hasta que sean sobreescritos por otros eventos.

    event:"inversionPrestamos.step0_solicitarInformacion",
        ...
        producto: "inversion",
        producto_tipo: "prestamos",
        operacion_perfil: "Inversionista",
        ...

Este segundo evento tiene algunos parámetros en común
con el evento que se disparó justo antes, entonces
dichos parametros no deben borrarse del dataLayer
y más bien acompañar al evento que que viene inmediatamente despúes:

    event:"registro.step0_signUp",
        ...
        producto: "inversion", //el valor lo hereda del evento anterior ya que el evento actual no hace cambios en este parámetro.
        producto_tipo: "prestamos", //el valor lo hereda del evento anterior ya que el evento actual no hace cambios en este parámetro.
        operacion_perfil: "Inversionista", //el valor lo hereda del evento anterior ya que el evento actual no hace cambios en este parámetro.
        ...
```
********************************
## Tarea Previas: 
* Retirar el script de Google Analytics desplegado/integrado directamente el código del sitio. 
* Conservar el despliegue/integración del contenedor de Google Tag Manager.
* Reemplazar los ID de contenedor de Google Tag Manager en los ambientes de Test y Dev por el mismo ID del contenedor de producción (**GTM-MBHLDNH**)

### Contenedor de Google Tag Manager GTM-MBHLDNH
```
<!-- Google Tag Manager: Paste this code as high in the <head> of the page as possible: -->
<script>(function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MBHLDNH');</script>
<!-- End Google Tag Manager -->


<!-- Google Tag Manager (noscript): Additionally, paste this code immediately after the opening <body> tag-->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBHLDNH" height="0" width="0"
        style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```
