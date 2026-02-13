# Guía de Personalización de Colores - 3Dsion

Este documento resume los cambios realizados para convertir la web a un **Tema Claro (Light)** y explica cómo podés seguir personalizando los colores de forma fácil.

## 1. ¿Qué hicimos?
1.  **Conversión Global**: Se eliminaron los fondos oscuros de todas las secciones debajo de la Portada.
2.  **Sistema de Variables**: Centralizamos los colores en el archivo `src/index.css` usando variables CSS.
3.  **Vinculación Directa**: Conectamos los IDs de las secciones (#soluciones, #proceso, etc.) directamente a las variables para que los cambios sean 100% confiables.
4.  **Limpieza de "Trampas"**: Eliminamos fondos negros fijos en `App.jsx` que bloqueaban el tema claro.

---

## 2. Cómo cambiar los colores de fondo
Todo se controla desde el archivo: `src/index.css`

Buscá la sección `/* VARIABLES DE COLOR PARA SECCIONES */` y editá los códigos hexadecimales:

| Variable | Sección que controla |
| :--- | :--- |
| `--bg-solutions` | Sección de "Nuestras Soluciones" |
| `--bg-valueprop` | Sección de "Propuesta de Valor" (Pilar 1 y 2) |
| `--bg-process` | Sección de "Nuestro Proceso" (Pasos 1 a 4) |
| `--bg-tech` | Sección de "Autoridad Técnica" (Software e Ingeniería) |
| `--bg-projects` | Sección de "Casos de Éxito" (Carrusel de proyectos) |
| `--bg-contact` | Sección de "Contacto" (Formulario, Info y Mapa) |
| `--bg-navbar` | Fondo de la barra de menú cuando bajas (scroll) |

---

## 3. Cómo cambiar el Azul Principal
Si querés cambiar el azul de los botones, iconos y algunos títulos, debés ir al archivo: `tailwind.config.js`

Buscá el bloque `primary` y cambiá el `DEFAULT`:
```javascript
primary: {
    DEFAULT: '#0056b3', // Cambiá este código hexadecimal
    dark: '#003d7a',
    light: '#3378c2',
},
```

---

## 4. Tips para Diseñadores (Illustrator)
Para llevarte la web a Illustrator y probar colores rápidamente:
*   **Opción A (PDF)**: Presioná `Ctrl + P` en el navegador y elegí "Guardar como PDF". Illustrator lo abrirá con capas vectoriales.
*   **Opción B (Captura XXL)**: Abrí la consola (`F12`), presioná `Ctrl + Shift + P` y escribí "Capture full size screenshot". Te bajará una imagen gigante de toda la página.

---

**Nota:** Si hacés cambios en el código y no los ves reflejados, asegurate de que el proceso `npm run dev` esté corriendo en la terminal.
