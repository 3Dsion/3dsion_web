# Guía de Despliegue en Hostinger - 3Dsion Web

Esta guía explica cómo subir la web a Hostinger una vez que el diseño esté listo.

## 1. Preparación del Código
A diferencia de GitHub Pages, en Hostinger el sitio suele vivir en la raíz (`/`). Debés asegurarte de que Vite genere los archivos correctamente.

### Ajuste en `vite.config.js`
Si vas a usar un dominio propio (ej: `www.3dsion.com.ar`), el `base` debe ser `'/'`. 
> [!NOTE]
> Nuestra configuración actual ya es inteligente y usa `'/'` automáticamente si no es para GitHub Pages, pero verificalo siempre.

## 2. Generar los archivos (Build)
En tu terminal local, ejecutá:
```bash
npm run build
```
Esto creará una carpeta llamada **`dist`** en tu proyecto con todo el código optimizado.

## 3. El archivo `.htaccess`
He creado un archivo en `public/.htaccess`. Al hacer el build, este archivo se copiará automáticamente a la carpeta `dist`.
- **¿Para qué sirve?** Permite que si alguien entra a `3dsion.com.ar/nosotros`, el servidor de Hostinger no dé un error 404 y deje que React maneje la navegación.

## 4. Subida al Servidor (Hostinger)
1. Entrá al **hPanel** de Hostinger.
2. Abrí el **Administrador de Archivos** (File Manager).
3. Entrá a la carpeta `public_html`.
4. Borrá cualquier archivo de bienvenida que haya (como `default.php`).
5. **Subí todo el contenido** que está DENTRO de tu carpeta local `dist`.
   - *Tip:* Podés comprimir el contenido de `dist` en un `.zip`, subirlo y extraerlo allá para que sea más rápido.

## 5. Resumen de Diferencias
| Característica | GitHub Pages | Hostinger |
| :--- | :--- | :--- |
| **URL** | `...github.io/3dsion_web/` | `www.3dsion.com.ar` |
| **Base Path** | `/3dsion_web/` | `/` |
| **Manejo de Rutas** | Automático (Actions) | Vía `.htaccess` |

## 6. Verificación Final
Una vez subido, navegá por el sitio y refrescá la página estando en la sección "Nosotros". Si carga correctamente, el `.htaccess` está haciendo su trabajo.
