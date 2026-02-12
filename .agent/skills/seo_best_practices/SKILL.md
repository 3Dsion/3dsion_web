---
name: seo_best_practices
description: Estándares de SEO para asegurar visibilidad en buscadores (Google).
---

# SEO Best Practices Skill

Al migrar de WordPress, es vital mantener y mejorar el posicionamiento. Este skill define cómo optimizar el sitio estático.

## Estructura de la Página
- **Helmet / Meta Tags:** Usar `react-helmet-async` para gestionar meta-títulos y descripciones dinámicas.
- **Títulos Únicos:** Cada página debe tener un `<h1>` único y descriptivo.
- **Jerarquía de Encabezados:** Usar secuencialmente `<h2>`, `<h3>`, etc.

## Optimización de Imágenes
- **Atributo Alt:** Todas las imágenes de proyectos deben tener descripciones `alt` claras.
- **Formato:** Usar `WebP` para las imágenes para reducir el peso y mejorar la velocidad (factor clave de SEO).
- **Lazy Loading:** Implementar carga diferida para imágenes que no están en la pantalla inicial.

## Meta-datos Técnicos
- **Favicon:** Configurar iconos para todos los dispositivos.
- **Open Graph:** Configurar tags para que al compartir el link en redes sociales/WhatsApp se vea una imagen y descripción atractiva.
- **Sitemap:** Generar un `sitemap.xml` al hacer el build para que Google encuentre todas las páginas.

## Performance
- El sitio debe cargar en menos de 1 segundo (LCP positivo).
- Usar fuentes locales o Google Fonts optimizadas para evitar retrasos en el renderizado.
