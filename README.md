# Terminal de Buses Vipu-Ray

Sitio web oficial para consultar empresas, destinos, boleterias, horarios referenciales e informacion de contacto del Terminal de Buses Vipu-Ray en Villarrica.

## Archivos principales

- `index.html`: sitio publico.
- `styles.css`: estilos del sitio publico.
- `app.js`: interaccion del sitio publico y datos de empresas.
- `dashboard.html`: panel de gestion local.
- `dashboard.css`: estilos del dashboard.
- `dashboard.js`: gestion de contenido, horarios, avisos e informes.
- `assets/`: imagenes, logos y fotografias del terminal.

## Desarrollo local

```bash
npm run dev
```

Luego abrir:

```text
http://localhost:4173
http://localhost:4173/dashboard
```

## Validacion rapida

```bash
npm run check:js
```

## Despliegue recomendado

El flujo recomendado es GitHub + Cloudflare Pages. Cloudflare debe conectar el repositorio de GitHub y publicar automaticamente cada cambio que se suba a la rama `main`.

Para una pagina estatica como esta:

- Build command: dejar vacio.
- Build output directory: `/`.
- Production branch: `main`.

Antes de conectar el dominio definitivo, revisar en `index.html`, `robots.txt` y `sitemap.xml` que la URL canonica coincida con el dominio final.
