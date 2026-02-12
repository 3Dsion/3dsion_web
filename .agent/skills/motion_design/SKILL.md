---
name: motion_design
description: Guía de animaciones y micro-interacciones con Framer Motion.
---

# Motion Design Skill

Define cómo dar vida al sitio mediante animaciones fluidas que no sacrifiquen el rendimiento.

## Animaciones Principales
- **Scroll Reveal:** Las secciones deben aparecer suavemente al deslizar (`whileInView`).
- **Page Transitions:** Uso de `AnimatePresence` para cambios de ruta o filtros de proyectos.
- **Hover Effects:** Escalar ligeramente imágenes (`scale: 1.05`) y cambiar opacidades.

## Configuración Sugerida
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

## Buenas Prácticas
- No sobre-animar; la animación debe acompañar, no distraer.
- Usar `layout` prop de Framer Motion para reordenamientos automáticos de grillas.
