# Contexto del Proyecto: 3Dsion Web

Este documento sirve como memoria técnica y estratégica del proyecto. Permite que cualquier desarrollador o agente continúe el trabajo con total claridad sobre las decisiones tomadas y el estado actual.

## 1. INFORMACIÓN GENERAL
- **Nombre del Proyecto:** 3Dsion Web.
- **URL de Producción:** [https://3Dsion.github.io/3dsion_web/](https://3Dsion.github.io/3dsion_web/)
- **Objetivo:** Presentar a 3Dsion como una autoridad técnica en ingeniería y fabricación aditiva (impresión 3D) para el sector industrial. Es una herramienta de ventas y posicionamiento.
- **Usuario Objetivo:** Profesionales de la industria, responsables de mantenimiento, ingenieros de desarrollo y compras técnicas.
- **Identidad de Marca:** 27 años de trayectoria en ingeniería (diseño mecánico, sheet metal) evolucionando hacia la tecnología 3D.

## 2. STACK TECNOLÓGICO
- **Core:** React 18 (Vite).
- **Estilos:** Tailwind CSS v3.
- **Animaciones:** Framer Motion (uso intensivo de `whileInView` y `initial/animate` para fluidez).
- **Iconografía:** Lucide React.
- **Routing:** React Router DOM v6.
- **Manejo de Metadatos:** React Helmet Async [PENDIENTE de optimización SEO].

## 3. ESTADO ACTUAL (Hito: Tema Claro Implementado)
- **Home:** Completa. Secciones ensambladas: `Hero`, `ServicesMosaic`, `TechAuthority`, `ProjectCarousel`, `ValueProp`, `ProcessSection`, `ContactSection` (rediseñada en v1.19).
- **Trayectoria:** Página institucional con estructura de 3 actos, reemplazando a la antigua `Nosotros`.
- **Tema:** El sitio fue convertido de Dark a **Tema Claro (Light)**. Los fondos de las secciones son controlados por variables CSS en `src/index.css`.
- **Sincronización:** Datos como proyectos y servicios están desacoplados en archivos JSON.

## 4. DIRECCIÓN DE DISEÑO (Industrial Premium)
- **Plantilla Maestra:** La **Home** es el estándar visual absoluto del proyecto. Cualquier nueva página o sección debe heredar su ADN: uso de espacios, tipografía, bordes redondeados industriales y sutileza en los degradados.
- **Estética:** Limpia, técnica y modular. Inspirada en estética tipo "SolidOS".
- **Color Principal:** Azul Industrial `primary: #0056b3` (configurado en `tailwind.config.js`).
- **Fondos de Secciones:** Se definen en `:root` dentro de `src/index.css` (ej: `--bg-solutions`, `--bg-tech`). Esto permite cambios de ambiente rápidos sin tocar JSX.
- **Hero:** Usa un video de fondo (`Banner-web-inicio.mp4`) con filtros de escala de grises y brillo reducido para resaltar el texto blanco.

## 5. ESTRUCTURA Y PATRONES
- **src/components/sections:** Cada sección de la landing es un componente independiente.
- **src/data:** 
  - `projects.json`: Fuente de verdad para el carrusel de casos de éxito.
  - `services.json`: Define los servicios mostrados en el mosaico.
- **Layout:** `Navbar` y `Footer` se comparten entre las rutas principales. La `Navbar` cambia de transparente a sólido (`bg-nav-scrolled`) al hacer scroll (>50px).
- **Contacto:** Datos duros en `ContactSection.jsx` (Guamini 5043, Lugano, CABA). El botón "COTIZAR" vincula directamente a WhatsApp corporativo.

## 6. CRITERIOS DE DESARROLLO
- **NO USAR:** Estilos genéricos, colores saturados sin sentido industrial, o fondos oscuros (salvo secciones de acento o el Hero).
- **PRIORIZAR:** 
  - **Responsividad:** El flujo de trabajo debe ser mobile-first (chequear iPad y móviles).
  - **Identidad:** Mantener el lenguaje de "Ingeniería Real" (evitar sonar como una agencia de marketing genérica).
  - **Consistencia:** Si se cambia un color de fondo, hacerlo vía variables CSS.

## 7. FLUJO DE TRABAJO
- **Desarrollo Local:** `npm run dev --host` (ideal para testear en el móvil en la misma red).
- **Instalación:** `npm install`.
- **Nuevos Contenidos:** Antes de tocar el JSX de un carrusel o mosaico, verificar si se puede actualizar desde su respectivo archivo `.json` en `src/data`.

## 8. PRÓXIMOS PASOS
1. **SEO:** Implementar meta-tags dinámicos con `react-helmet-async` usando palabras clave industriales [EN PROGRESO].
2. **Revisiones:** Validar la visualización del video de fondo en dispositivos iOS (low power mode puede bloquear el autoplay) [CONFIRMADO].
3. **Página Trayectoria:** Cargar assets finales para reemplazar placeholders.

## 9. MANTENIMIENTO DEL DOCUMENTO
- **Documento Vivo:** Este archivo DEBE ser actualizado ante cambios significativos en el stack, diseño o lógica de negocio.
- **Protocolo de Actualización:** Cuando el usuario solicite "actualizar el contexto" o tras completar un hito de los `PRÓXIMOS PASOS`, el asistente debe revisar y editar este archivo para reflejar la nueva realidad del proyecto.
- **Historial de Decisiones:** Si se descarta una tecnología o se cambia un criterio de diseño, se debe dejar constancia breve aquí para evitar retrocesos en sesiones futuras.

## 10. DOCUMENTACIÓN AUXILIAR

Para facilitar la gestión del proyecto, se han creado las siguientes guías específicas:

- 📖 [**Guía de Desarrollo Local**](file:///e:/ANTIGRAVITY/3dsion_web/docs/GUIA_DESARROLLO.md): Cómo correr el proyecto y solucionar errores.
- 🛠️ [**Guía de Mantenimiento**](file:///e:/ANTIGRAVITY/3dsion_web/docs/GUIA_MANTENIMIENTO.md): Cómo actualizar datos, servicios y usar componentes UI.
- 📋 [**Backlog de Tareas**](file:///e:/ANTIGRAVITY/3dsion_web/docs/BACKLOG.md): Lista de pedidos pendientes para el desarrollo.
- 🚀 [**Guía de Despliegue Hostinger**](file:///e:/ANTIGRAVITY/3dsion_web/docs/GUIA_HOSTINGER.md): Pasos para subir la web a un servidor profesional.
- 💾 [**GitHub Workflow**](file:///e:/ANTIGRAVITY/3dsion_web/docs/GITHUB_WORKFLOW.md): Protocolo de commits y despliegue.
- 🎨 [**Guía de Temas**](file:///e:/ANTIGRAVITY/3dsion_web/docs/THEME_GUIDE.md): Estándares de color y estilo.

## 11. REGLAS DE ORO
- **Actualización de Historial:** Cada vez que se realiza un "guardado" (commit) significativo, es OBLIGATORIO actualizar `docs/HISTORY.md` con el detalle técnico de los cambios. Esto permite auditoría y continuidad del proyecto.
