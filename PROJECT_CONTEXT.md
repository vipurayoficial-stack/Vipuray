# Contexto del Proyecto Vipu-Ray

Este documento es una guia de traspaso para que otra cuenta de Codex pueda trabajar en el proyecto sin partir perdida, sin desarmar decisiones ya tomadas y sin consumir recursos innecesarios.

## Resumen

Proyecto: sitio web oficial del Terminal de Buses Vipu-Ray Villarrica.

URL publica: https://vipuray.pages.dev

Repositorio: https://github.com/vipurayoficial-stack/Vipuray

Plataforma de despliegue: Cloudflare Pages.

Rama principal: `main`.

El sitio es una web informativa. Por ahora no vende pasajes online. La funcion principal es entregar informacion clara sobre empresas, destinos, boleterias, horarios o frecuencias referenciales, datos de contacto y servicios rurales.

## Forma de trabajar con Diego

Diego prefiere trabajar en "modo ahorro":

- No abrir navegador.
- No hacer screenshots.
- No usar verificacion visual automatica salvo que Diego lo pida explicitamente.
- Diego revisa visualmente la web desde su navegador.
- Codex debe hacer verificaciones tecnicas livianas: `npm run check:js`, `git diff --check`, `rg`, `git status`, etc.
- Mantener respuestas claras, directas y en espanol.
- Antes de editar, explicar brevemente que se cambiara.
- Evitar cambios amplios si el pedido es puntual.
- No revertir trabajo existente sin permiso.

## Estado actual del sitio

El sitio esta hecho como proyecto estatico con HTML, CSS y JavaScript.

Archivos principales:

- `index.html`: pagina publica principal, SEO, footer, estructura general.
- `styles.css`: estilos principales del sitio publico.
- `app.js`: logica del sitio publico, tarjetas de empresas, buscador, resultados, slider e interacciones.
- `dashboard.html`: panel administrativo.
- `dashboard.css`: estilos del dashboard.
- `dashboard.js`: logica del dashboard, datos base y gestion.
- `functions/api/events.js`: endpoint de eventos/analytics.
- `functions/api/analytics.js`: endpoint de datos analiticos.
- `functions/_middleware.js`: proteccion/autenticacion del dashboard y funciones.
- `migrations/0001_create_analytics_events.sql`: tabla D1 para analytics.
- `wrangler.toml`: configuracion de Cloudflare/Pages Functions.
- `assets/`: imagenes, logos y material visual.

## Despliegue

Cloudflare Pages esta conectado a GitHub. Al hacer push a `main`, Cloudflare deberia desplegar automaticamente.

Proyecto Cloudflare Pages: `vipuray`.

URL final: https://vipuray.pages.dev

Si hay que verificar publicacion, hacerlo solo si Diego lo pide o si es indispensable. En modo ahorro, basta con confirmar por codigo y dejar que Diego vea la pagina.

## Dashboard

Dashboard publico:

https://vipuray.pages.dev/dashboard

El dashboard existe para controlar contenido y revisar datos. Tiene proteccion por autenticacion. No guardar credenciales dentro del repositorio porque el repo puede ser publico.

Si otra cuenta de Codex necesita acceso, debe pedir las credenciales a Diego, no inventarlas ni buscarlas en el repo.

El dashboard usa datos por defecto desde `dashboard.js` y puede guardar datos editados en `localStorage`. El sitio publico tambien lee datos desde `localStorage` cuando existen. Hay normalizaciones para evitar que datos antiguos reintroduzcan empresas rurales que ya fueron agrupadas.

## Analytics y datos reales

La intencion del proyecto es ir guardando datos reales para informes mensuales profesionales.

Cloudflare D1 esta configurado para analytics:

- Binding: `DB`
- Base de datos: `vipuray_analytics`

No asumir que todos los datos historicos ya existen. Si se trabaja en informes, primero revisar endpoints y estructura real.

Eventos esperados:

- Visitas al sitio.
- Clicks relevantes.
- Consultas de empresa.
- Clicks de contacto.
- Uso del dashboard.

Objetivo futuro: poder seleccionar rango de fechas y generar reportes PDF profesionales para socios de Vipu-Ray, con una seccion especial dedicada solo a Buses Vipu-Ray.

## Datos reales del terminal

Direccion correcta:

Anfion Munoz 745, Villarrica, Chile.

Correo:

vipuray.oficial@gmail.com

Instagram:

https://www.instagram.com/buses_vipuray/

Usuario Instagram:

@buses_vipuray

No hay telefono ni WhatsApp por ahora. No agregar WhatsApp.

Horarios:

- Boleterias Villarrica y Pucon: lunes a domingo, 07:00 a 21:00 hrs.
- Boleteria Loncoche: lunes a sabado, 08:00 a 18:00 hrs.
- Atencion digital por Instagram o correo: lunes a viernes, 13:00 a 21:00 hrs.

La atencion digital significa que el equipo responde mensajes y solicitudes por Instagram o correo dentro de ese rango.

## Empresas principales

Estas empresas deben mantenerse como tarjetas individuales:

- Buses Vipu Ray
- Buses Conaripe
- Buses Villarrica
- Buses Transantin
- Buses Pullman Tur
- Buses Oro Verde
- Buses Lista Azul
- Buses Barahona
- Servicios rurales

Importante:

- La empresa se llama `Buses Lista Azul`, no Linea Azul.
- No volver a cambiarla a Linea Azul.
- Los servicios rurales deben estar agrupados en una sola tarjeta llamada `Servicios rurales`.

## Servicios rurales

No deben aparecer como tarjetas individuales:

- Buses Manuel Armona
- Buses Leonardo del Valle
- Transportes Esperanza (Surtran)
- Buses E.De.T. De Eoca Bus Limitada
- Buses Jose Castillo

Todos esos operadores deben quedar dentro de `Servicios rurales`, como recorridos/operadores internos.

Imagen actual de servicios rurales:

`assets/company-logos/servicios-rurales.png`

Esta imagen fue agregada y optimizada para web.

## Reglas de diseno importantes

El sitio debe sentirse:

- Profesional.
- Moderno.
- Premium.
- Claro.
- Ejecutivo.
- Ordenado.
- Visualmente elegante, no como plantilla generica.

Decisiones visuales ya tomadas:

- Header blanco con logo grande Vipu-Ray.
- Hero con foto del frontis del terminal y texto sobre el lado derecho, cuidando no tapar el logo de la foto.
- Tarjetas de empresas con acabado premium, fondos por color de marca y logos grandes pero proporcionados.
- Los logos deben verse por delante del "cristal", no opacos ni perdidos.
- Coñaripe se corrigio para que no quede fundido con el cristal.
- Las tarjetas rurales estan agrupadas en `Servicios rurales`.
- El usuario no quiere que se repita innecesariamente "Tipo de servicio" ni la boleteria en demasiados lugares.
- La seccion de informacion de empresa debe ser moderna y limpia, parecida al ultimo ejemplo enviado por Diego.

## Logos y assets relevantes

Logos de empresas:

- `assets/vipuray-logo-wide.png`
- `assets/company-logos/buses-conaripe.png`
- `assets/company-logos/buses-villarrica.png`
- `assets/company-logos/buses-transantin.png`
- `assets/company-logos/buses-pullman-tur.png`
- `assets/company-logos/buses-oro-verde.png`
- `assets/company-logos/buses-lista-azul.png`
- `assets/company-logos/buses-barahona.png`
- `assets/company-logos/servicios-rurales.png`

Imagen hero actual:

- `assets/frontis-terminal-new.png`

Fotos del terminal:

- `assets/frontis-terminal.jpg`
- `assets/terminal-front.png`
- `assets/fachada-trasera-terminal.png`
- `assets/andenes-frontis-terminal.png`
- `assets/andenes-traseros-noche.png`
- `assets/patio-trasero-noche.png`

Imagen del minibus:

- `assets/minibus-side.png`

No cambiar estas imagenes sin instruccion explicita.

## SEO

El SEO ya fue trabajado en `index.html`:

- Meta tags.
- Datos estructurados.
- Informacion de contacto.
- Empresas.
- Preguntas frecuentes.
- Sitemap y robots.

Si se cambian datos reales como direccion, horarios, empresas o contacto, actualizar tambien los datos estructurados en `index.html`, no solo el texto visible.

## Dashboard y credenciales

No guardar contrasenas en Git.

Si se necesita cambiar credenciales del dashboard, revisar `functions/_middleware.js` y/o variables de entorno segun la implementacion vigente. Confirmar con Diego antes de modificar datos sensibles.

## Pruebas recomendadas

Antes de guardar cambios:

```bash
npm run check:js
git diff --check
git status --short
```

No abrir navegador ni hacer capturas salvo que Diego lo pida.

## Git

El repo esta conectado a Cloudflare Pages. Flujo normal:

```bash
git status --short
git add <archivos>
git commit -m "Mensaje claro"
git push origin main
```

Despues del push, Cloudflare deberia desplegar automaticamente.

## Advertencias para otro Codex

- No separar nuevamente los servicios rurales en tarjetas individuales.
- No cambiar `Buses Lista Azul` a `Linea Azul`.
- No agregar venta online de pasajes si Diego no lo pide.
- No agregar WhatsApp ni telefono.
- No mover el hero sin cuidar que se vea el logo Vipu-Ray del frontis.
- No usar imagenes dentro de las tarjetas de empresa salvo logos o assets aprobados por Diego.
- No hacer grandes redisenos sin confirmar.
- No tocar credenciales ni secretos dentro de archivos publicos.
- No asumir que el dashboard ya tiene todos los datos automaticos perfectos; revisar antes.

## Ultimos cambios relevantes

Cambios recientes del historial:

- `23d3b4b`: se agrego imagen de Servicios rurales y se corrigio el logo de Coñaripe para que se vea por delante del cristal.
- `944dc99`: se actualizo el horario de atencion digital a lunes a viernes, 13:00 a 21:00 hrs.
- `74c5f78`: se agruparon los servicios rurales y se pulio la seccion de informacion de empresa.
- `e80d2a3`: se corrigieron iconos negros en botones del hero.
- `58d323e`: se actualizo la imagen del frontis del hero.

## Mensaje recomendado para iniciar en otra cuenta de Codex

Copiar y pegar este mensaje al abrir el proyecto en otra cuenta:

```text
Este proyecto es el sitio web del Terminal de Buses Vipu-Ray Villarrica. Antes de tocar codigo, lee PROJECT_CONTEXT.md completo. Trabaja en modo ahorro: no abras navegador ni hagas screenshots salvo que yo lo pida; yo reviso visualmente. Haz cambios acotados, respeta las decisiones existentes y no reviertas trabajo sin permiso. El sitio esta publicado en https://vipuray.pages.dev y el repo es https://github.com/vipurayoficial-stack/Vipuray.
```

