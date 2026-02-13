# Guía de Mantenimiento Técnico - 3Dsion 🛠️

Esta guía explica cómo realizar cambios comunes en el sitio aprovechando la nueva estructura optimizada.

## 1. Actualizar Información de la Empresa
Para cambiar teléfonos, emails, dirección o los horarios de atención, **no toques el código**. Editá este archivo:

📄 `src/data/company.json`

```json
{
  "contact": {
    "phone": "NUEVO TELÉFONO",
    "email": "NUEVO EMAIL",
    "address": "NUEVA DIRECCIÓN"
  },
  "schedule": {
    "weekdays": "NUEVOS HORARIOS"
  }
}
```

## 2. Actualizar Servicios y Soluciones
Para agregar, quitar o editar los servicios que aparecen en el mosaico:

📄 `src/data/services.json`

- Solo necesitás cambiar el `title`, `description` o el `icon` (usando nombres de [Lucide Icons](https://lucide.dev/icons)).

## 3. Uso de Componentes UI (Estandarización)
Si querés crear una nueva sección, usá estos componentes para mantener la estética:

### 🔹 Títulos de Sección (`SectionTitle`)
```jsx
<SectionTitle 
    title="Tu Título" 
    highlight="Palabra Naranja" 
    align="center" // o left
    subtitle="PEQUEÑO TEXTO ARRIBA"
/>
```

### 🔹 Botones (`Button`)
```jsx
<Button variant="primary" href="#link">BOTÓN AZUL</Button>
<Button variant="secondary" onClick={fn}>BOTÓN TRANSPARENTE</Button>
```

## 4. Reemplazo de Assets
- **Video Hero:** Reemplazá `src/assets/Banner-web-inicio.mp4` manteniendo el mismo nombre.
- **Imágenes:** Guardalas en `src/assets/` y usá formatos optimizados (WebP o SVG siempre que sea posible).

## 5. Publicación de Cambios
1. Verificá en local con `npm run dev`.
2. Guardá los cambios: `git add .`, `git commit -m "update: descripción del cambio"`.
3. Subí a producción: `git push`. GitHub Actions se encargará del resto.
