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
| 02 | Nuevo     | --                  | --               | [Eventos Globales](/02-%20Eventos%20Globales/)                             |
| 03 | OK     | Todos               | Todos            | [Registro y Login](/03-%20Registro%20y%20Login/)                             |
| 04 | OK     | Prestamos           | Publica y Privada| [Prestamos - Publica y Plataforma](/04-%20Prestamos%20-%20Zona%20Publica%20y%20Privada/) |
| 05 | OK     | Invertir Prestamos  | Publica          | [Invertir Prestamos - Publica](/05-%20Inversion%20Prestamos%20-%20Zona%20Publica/)  |
| 06 | OK     | Invertir Prestamos  | Privada          | [Invertir Prestamos - PLataforma](/06-%20Inversion%20Prestamos%20-%20Zona%20Privada/) |
| 07 | OK     | Factoring           | Publica          | [Factoring - Publica](/07-%20Factoring%20-%20Zona%20Publica/)                         |
| 08 | Nuevo     | Factoring           | Privada          | [Factoring - Plataforma](/08-%20Factoring%20-%20Zona%20Privada/)                     |
| 09 | Observacion     | Invertir Factoring  | Publica          | [Invertir Factoring - Publica](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/)   |
| 10 | Nuevo     | Invertir Factoring  | Privada          | [Invertir Factoring - Plataforma](/10-%20Inversion%20Factoring%20-%20Zona%20Privada/) |
| 11 | OK     | Gestora             | Publica          | [Gestora - Publica](/11-%20Gestora%20-%20Zona%20Publica/)                             |
| 12 | Nuevo     | Cambio de Divisas             | Privada          | [Cambio Divisas](/12-%20Cambio%20de%20Divisas/)                             |

***********************************
## OBSERVACIONES GENERALES:
1. Se agregaron eventos (rehacer inversion) y parámetros (perdil institucional o persona natural) al flujo de [Inversion en Factoring en Platafora](/10-%20Inversion%20Factoring%20-%20Zona%20Privada/)
2. Se agregó un evento global para [Modales](/02-%20Eventos%20Globales/event%20prestamype.modales.js)
3. Se agregó un evento para el producto [Cambio de Divisas](/12-%20Cambio%20de%20Divisas/event%20exchange.step1_confirmacionCambioDivisas.js)
4. Se observó el parametro inversion_plazo en [Inversion en Factoring en Zona Publica](/09-%20Inversion%20Factoring%20-%20Zona%20Publica/)

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
