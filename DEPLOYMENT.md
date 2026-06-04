# Guia de despliegue

## Decision

Usaremos GitHub como repositorio principal y Cloudflare Pages como plataforma de publicacion.

Este flujo permite:

- Publicar una version inicial en `*.pages.dev`.
- Conectar despues un dominio propio, por ejemplo `vipuray.cl`.
- Hacer cambios desde este proyecto local.
- Subirlos a GitHub.
- Dejar que Cloudflare actualice la web automaticamente.

## Paso 1: Crear repositorio en GitHub

1. Entrar a GitHub.
2. Crear un repositorio nuevo, por ejemplo `vipu-ray-web`.
3. Dejarlo privado o publico segun prefieras.
4. No agregar README ni archivos iniciales desde GitHub, porque este proyecto ya los tiene.

## Paso 2: Conectar este proyecto local con GitHub

Cuando tengas la URL del repositorio, ejecutar:

```bash
git remote add origin https://github.com/TU-USUARIO/vipu-ray-web.git
git push -u origin main
```

## Paso 3: Crear el proyecto en Cloudflare Pages

1. Entrar a Cloudflare.
2. Ir a Workers & Pages.
3. Crear una aplicacion Pages.
4. Elegir Connect to Git.
5. Seleccionar el repositorio de GitHub.
6. Configurar:

```text
Framework preset: None
Build command: vacio
Build output directory: /
Production branch: main
```

## Paso 4: Revisar el sitio publicado

Cloudflare entregara una URL temporal tipo:

```text
https://vipu-ray-web.pages.dev
```

Esa URL sirve para revisar todo antes de conectar el dominio definitivo.

## Paso 5: Dominio final

Cuando el dominio este listo, conectar el dominio en Cloudflare Pages y actualizar:

- `index.html`: etiquetas canonical, Open Graph y JSON-LD.
- `robots.txt`: URL del sitemap.
- `sitemap.xml`: URL del sitio.

Actualmente estan preparados para:

```text
https://vipuray.cl/
```

## Datos e informes

La web ya tiene un dashboard local y una capa preparada para datos reales automaticos.

Actualmente registra:

- Visitas a la pagina.
- Consultas de horarios por empresa.
- Clics en tarjetas de empresas.
- Clics a Instagram.
- Clics de correo.
- Formularios enviados.
- Interacciones enfocadas en Buses Vipu-Ray.

Si Cloudflare D1 todavia no esta conectado, el dashboard muestra datos locales de este navegador. Cuando D1 quede conectado, el dashboard empezara a leer datos centralizados de todos los visitantes.

### Activar Cloudflare D1

1. Entrar a Cloudflare.
2. Ir a Storage & Databases > D1 SQL Database.
3. Crear una base llamada, por ejemplo:

```text
vipuray_analytics
```

4. Abrir la base creada y ejecutar el SQL de:

```text
migrations/0001_create_analytics_events.sql
```

5. Ir al proyecto de Pages de Vipu-Ray.
6. Entrar a Settings > Functions > D1 database bindings.
7. Crear un binding con:

```text
Variable name: DB
D1 database: vipuray_analytics
```

8. Guardar y volver a desplegar el proyecto.

La base creada para este proyecto es:

```text
Nombre: vipuray_analytics
ID: 7096f8e6-bccf-420b-aa20-a47d87f4b622
Binding usado por la web: DB
```

El archivo `wrangler.toml` ya contiene este binding para que Cloudflare Pages lo tome en los despliegues del repositorio.

### Uso en el dashboard

En `https://vipuray.pages.dev/dashboard`, la seccion `Datos` permite:

- Elegir fecha inicial y fecha final.
- Ver visitas, consultas, clics de Instagram e interacciones Vipu-Ray.
- Revisar rankings de empresas y destinos.
- Ver actividad diaria en grafico.
- Aplicar esos datos al informe mensual.

Este sera el punto de partida para generar informes ejecutivos mensuales con datos reales.
