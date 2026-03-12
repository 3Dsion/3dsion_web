# Estado Actual del Proyecto: 3Dsion Web

Este documento sirve como la "Verdad Única" para que cualquier sesión de IA o desarrollador entienda el progreso, la filosofía de diseño y los estándares técnicos del sitio.

## 🎯 Alma del Proyecto
- **Estética**: Industrial, Premium, Limpia. Uso de gradientes atmosféricos, glassmorphism y micro-animaciones.
- **Filosofía de Control**: El usuario tiene el control total desde el "Panel de Control" en `src/index.css`.
- **Propósito**: Sitio corporativo/industrial para manufactura aditiva (impresión 3D) enfocado a empresas e ingeniería.

## 🛠️ Pilares Técnicos
1. **Centralización Estética**: Prohibido usar colores o estilos fijos en componentes. Todo debe estar vinculado a variables en `:root` de `index.css`.
2. **Independencia por Página**: Cada página (Hero, Cotizar, etc.) tiene su propio bloque de tokens para evitar efectos secundarios.
3. **Escalabilidad**: Estructura basada en `src/components/` dividida en `ui`, `layout` y `sections`.
4. **SEO & Performance**: Uso de `react-helmet-async` y optimización de assets.

## ✅ Hitos Alcanzados (Resumen)
- **Sincronización de Activos**: Restauración de fotos y videos industriales reales superando las versiones de IA.
- **Consistencia de Escalas**: Decisión final de mantener la escala visual industrial actual (vínculo de identidad), descartando ajustes de compactación.
- **Deployment**: Preparado para Hostinger (subcarpetas) y entorno local unificado.

## 📌 Reglas de Oro para el Futuro
- **Nuevas Páginas**: Siempre crear un bloque idéntico en `index.css` antes de codear el JSX.
- **Comentarios**: Mantener la documentación en el CSS para que Rodrigo sepa qué controla cada cada variable.
- **Interacción**: "Modo Agilidad Ejecutiva". El agente tiene autonomía para ejecutar comandos y cambios de archivos proactivamente. Rodrigo supervisa y valida directamente desde la interfaz.

---
*Ultima actualización: 14 de Febrero, 2026 - Sesión de Refinamiento Estético e Institucionalización.*
