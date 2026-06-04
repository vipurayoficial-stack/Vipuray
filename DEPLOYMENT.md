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

La web ya tiene un dashboard local. Para datos reales automaticos, el siguiente paso recomendado es publicar la web y luego agregar:

- Cloudflare Web Analytics para trafico general.
- Pages Functions + D1 para registrar consultas de horarios, clics de Instagram, mensajes y eventos personalizados por rango de fechas.
- Generacion de informes mensuales desde el dashboard usando datos reales.
