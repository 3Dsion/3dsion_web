---
name: deployment_hostinger
description: Pasos para desplegar el proyecto Vite en el hosting de Hostinger.
---

# Deployment Hostinger Skill

Guía para pasar el sitio del entorno local a tu dominio en Hostinger.

## Paso 1: Build del Proyecto
Ejecutar el comando de producción:
```bash
npm run build
```
Esto generará una carpeta `dist/` optimizada y lista para la web.

## Paso 2: Subida de Archivos
1. **Acceso:** Entrar al panel de Hostinger (hPanel) > Administrador de Archivos.
2. **Ubicación:** Ir a `public_html`.
3. **Subida:** Subir TODO el contenido de la carpeta `dist/` (no la carpeta en sí, sino lo que hay dentro).

## Paso 3: Configuración de SPA (Opcional)
Si usas `react-router` y las subpáginas dan error 404 al recargar, crear un archivo `.htaccess` en `public_html` con:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
