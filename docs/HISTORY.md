# Registro Histórico de Cambios (Changelog)

Este documento registra cronológicamente las implementaciones realizadas en el proyecto 3Dsion Web, cruzando los mensajes de Git con una descripción técnica detallada para que Rodrigo pueda auditar qué se tocó en cada paso.

---

## 🛠️ Febrero 22, 2026: Expansión Maestra de Plan de Producción v1.65
### Commit `pend-commit-id` - feat(v1.65): Expansión total de Guía Visual (30+ assets) y actualización NotebookLM
**Descripción de la implementación:**
- **Cobertura Total:** Se expandió la auditoría visual para cubrir el 100% de los archivos listados en `ASSETS_GUIDE.md` (Trayectoria, Soluciones, Ingeniería, Producción, Gran Formato, Prototipado, Modelado e Inversa).
- **Criterio Sistematizado:** Cada uno de los 30+ assets ahora cuenta con un Brief de Composición (Mix Híbrido) y un Alt-Text SEO técnico optimizado.
- **Sincronización NotebookLM:** Actualización masiva de la fuente de verdad en el cerebro digital mediante MCP, inyectando la tabla completa de metadata estratégica.

---

## 🛠️ Febrero 22, 2026: Auditoría Visual e Integración Estratégica v1.60
### Commit `4839dc0` - feat(v1.60): Auditoría Visual, Identificación de Gaps e Integración con NotebookLM
**Descripción de la implementación:**
- **Auditoría Visual B2B:**
    - Análisis de assets existentes bajo el prisma de "Socio Estratégico de Manufactura".
    - Definición de **Briefs de Composición (Mix Híbrido)**: Combinación de fotografía real (manufactura) con capas técnicas CAD/Exploded View.
    - Redacción de Alt-Texts SEO de alta precisión técnica.
- **Identificación de 'Gaps' Visuales:**
    - Se detectaron y planificaron activos para secciones previamente descuidadas: `IdentitySection` (Workshop), `ProcessSection` (Calidad/Check) y `Cotizar` (Materiales Técnicos).
- **Integración con NotebookLM:**
    - Automatización de carga de metadata mediante servidor MCP.
    - Creación del cuaderno `3DSION - Plan de Producción Visual y Metadata` como cerebro digital para la toma de decisiones estéticas.
- **Documentación Técnica:**
    - Creación de `docs/PLAN_PRODUCCION_VISUAL.md` como guía maestra de producción.
    - Organización estratégica de scripts de automatización en `scripts/mcp/`.

---

## 🛠️ Febrero 17, 2026: Unificación Visual Trayectoria v1.51
### Commit `pend-commit-id` - feat(v1.51): Unificación Trayectoria estilo Cotizar y Optimización Contacto
**Descripción de la implementación:**
- **Trayectoria (Estilo Laboratorio Iluminado):**
    - Se transformó la página de trayectoria para clonar la estética de `/cotizar` (fondos blancos, gradientes radiales sutiles y tipografía Navy Blue).
    - **Cards de Actos:** Se aplicó el sistema de tokens de cotización (`--cotizar-card-bg`, `--cotizar-card-border`) con efectos de glassmorphism suave.
    - **Navegación:**
    - El Navbar ahora es sólido por defecto en esta ruta para asegurar legibilidad sobre el fondo claro.
    - **Scroll UX:** Se optimizó el scroll de anclas en la Home para que los elementos (especialmente la tarjeta de contacto) se centren verticalmente en la pantalla (`block: center`), evitando que queden pegados al borde superior o tapados por el Navbar.
- **Home (Optimización Contacto):**
    - **Compactación:** Se redujo el padding vertical global de `py-24` a `py-16`.
    - **UX:** Se ajustaron los gaps internos y tamaños de fuente del formulario para una estética más profesional y menos espaciada.
- **Calidad:** Verificación completa con `npm run build`.

---

## 🛠️ Febrero 17, 2026: Unificación Visual Soluciones v1.41
### Commit `51502f1` - feat(v1.41): Unificación Soluciones UI, Scroll Navbar y Ajuste Hero
**Descripción de la implementación:**
- **Soluciones (Unificación UI/UX):**
    - Se estandarizaron las 6 subpáginas (`Ingenieria`, `Produccion`, `GranFormato`, `Prototipado`, `Modelado`, `IngenieriaInversa`) bajo el mismo sistema de diseño "Glassmorphism" (tarjetas translúcidas, bordes sutiles, sombras).
    - **Safe Zone:** Implementación global de `.whatsapp-safe-zone` en todos los contenedores para evitar solapamiento con el botón flotante.
    - **Detalles Premium:** Se agregaron líneas de acento con degradado (`primary-to-orange`) y watermarks numéricos gigantes en las secciones de proceso.
    - **Contenido:** Actualización quirúrgica de textos (copywriting) en todas las soluciones para reflejar la propuesta de valor exacta (e.g., "Consultoría de Factibilidad", "Entrega Programada", "Geometrías a Escala Real").
- **Navegación:**
    - **Scroll Top:** El logo y el botón "Inicio" ahora fuerzan el scroll al tope de la página (`window.scrollTo(0,0)`), mejorando la UX al navegar entre secciones.
- **Hero:**
    - Se ajustó la altura a `min-h-[105vh]` para asegurar que el video cubra la pantalla completa en móviles con barras de navegación dinámicas, evitando cortes visuales inferiores.
- **Assets:**
    - Actualización de `docs/ASSETS_GUIDE.md` con la nomenclatura estándar `[ruta]-hero.webp` y `[ruta]-card-n.webp`.

## 🛠️ Febrero 15, 2026: Despliegue Maestro v1.19
### Commit `1a378e1` - feat(v1.19): Despliegue Maestro - Trayectoria, Rediseño Home, SEO, Safe Zone y Assets
**Descripción de la implementación:**
- **Identidad y Navegación:**
    - Se creó la página `/trayectoria` (Trayectoria.jsx) con estructura de 3 actos narrativos y redirección 301 desde `/nosotros`.
    - Unificación de anclas de contacto a `#contacto` (antes `#contactos`) en todo el sitio para consistencia.
    - Actualización de enlaces en Navbar y Footer.
- **Rediseño Home:**
    - **ValueProp:** Textos actualizados (Optimización, Alianza, Agilidad, ADN) con voz institucional.
    - **ServicesMosaic:** Reemplazo de iconos por imágenes de fondo con overlay oscuro y efecto hover scale.
    - **TechAuthority:** Rediseño de tarjeta de software con fondo `bg-slate-50/80`, sombra `shadow-xl` y grilla de logos con micro-puntos.
- **Infraestructura:**
    - **SEO:** Verificación de `<Helmet>` en todas las rutas.
    - **Safe Zone:** Implementación de clase `.whatsapp-safe-zone` con padding derecho en desktop para evitar solapamiento con botón flotante.
    - **Video Hero:** Confirmación de atributos para compatibilidad iOS/Safari.
- **Documentación:** Creación de `docs/ASSETS_GUIDE.md` con listado de assets requeridos.

## 🛠️ Febrero 15, 2026: Optimización de Performance y UX de Identidad
### Commit `b184401` - feat: optimización de video Hero, refactorización de sección Identidad y mejoras en el menú desplegable de Soluciones
**Descripción de la implementación:**
- **Performance Hero:** Se eliminaron filtros CSS (`grayscale`, `brightness`) del video de fondo para reducir la carga de GPU. Se activó aceleración por hardware (`will-change: transform`) y control de loop manual por JS para eliminar micro-tirones.
- **Estructura Home:** Se creó `IdentitySection.jsx` extrayendo la tarjeta de valor de `ValueProp` para colocarla inmediatamente después del Hero, reforzando el impacto técnico inicial.
- **Navbar 2.0:** Se implementó un menú desplegable dinámico para "Soluciones" con:
    *   Highlight en gama naranja (identidad de logo).
    *   Tipografía optimizada (text-xs + tracking-wider) para evitar distorsión visual.
    *   Sincronización automática con `services.json`.
- **Modernización de Copys:** Se reemplazaron términos como "décadas" por "años" y "oficio" por "experiencia" para proyectar una imagen industrial moderna y ágil.
- **Soluciones Dinámicas:** Se creó la página `/soluciones/ingenieria` con un diseño técnico profundo (proceso de co-creación, pilares de DFM y propuesta de valor industrial).
- **Navegación Integral:** 
    *   Se actualizó `services.json` con enlaces dinámicos.
    *   Tanto el dropdown del Navbar como las tarjetas del mosaico ahora redirigen proactivamente a sus respectivas páginas o anclajes automáticamente.
    *   Se añadió un indicador visual ("Ver detalles") con flecha animada en las tarjetas de soluciones al hacer hover.
- **UX de Navegación:** Se unificó el comportamiento sólido del Navbar y se ajustó el Banner principal de Ingeniería para que se extienda hasta el borde superior de la pantalla, fluyendo debajo de la barra de menú para una estética más integrada.
    *   Se cambió el color del identificador "Soluciones Técnicas" a naranja (`text-orange-500`) para mejorar la legibilidad y coherencia con los elementos de acción/resaltado.
- **Gobernanza:** Se estableció la Home como **Plantilla Maestra** visual en `docs/PROJECT_CONTEXT.md` y se automatizó el protocolo de Git en `user_profile`.

---

## 🛠️ Febrero 14-15, 2026: Refinamiento "Clean Tech" y UX Industrial

### Commit `79f171c` - Refinamiento estético Clean Tech en Cotizar, ajustes de bordes, degradados técnicos y animación de WhatsApp
**Descripción de la implementación:**
- **Página de Cotizar:**
    - Se recalibró toda la página para una estética "Laboratorio Iluminado" (fondos blancos puros y sombras `shadow-xl`).
    - **Matemática de Radios:** Se ajustaron los bordes de las tarjetas internas (`rounded-[2.1rem]`) para que sigan la curvatura exacta de la tarjeta externa (`rounded-[2.5rem]` con padding).
    - **Dropzone:** Se aplicó borde `dashed` (punteado) permanente que se oscurece y cambia a azul primary en hover.
    - **Jerarquía Visual:** Se unificaron los fondos de las tarjetas de formulario e información usando nuevas variables CSS.
    - **Resplandor Técnico:** Se movió el degradado radial al contenedor `main` y se subió al 20% de altura para que fluya por detrás de las tarjetas sin cortes abruptos.
- **WhatsApp:**
    - Se redujo el icono un 10% dentro del círculo verde.
    - Se implementó una animación de "doble latido" (dos pulsos rápidos y un reposo de 3 segundos) para mejorar el Call to Action.
- **Hero:**
    - Se añadió un icono de maletín al botón de "Casos de Éxito" y se configuró scroll suave nativo hacia `#proyectos`.

### Commit `1a0a073` - feat: logo navbar link inicio
**Descripción de la implementación:**
- Se vinculó el logo del Navbar para que siempre redirija a la raíz `/`, mejorando la navegación básica.

---

## 🛠️ Febrero 13-14, 2026: Arquitectura y Deployment

### Commit `fbc3f6c` - Refactorización de rutas para subcarpeta (Hostinger) y mejoras de UX en Cotizar
**Descripción de la implementación:**
- **Hostinger Ready:** Se ajustaron las rutas de la aplicación para funcionar correctamente dentro de una subcarpeta en el servidor.
- **Navbar Inteligente:** Se implementó lógica para que el Navbar se vea siempre "scrolleado" (con fondo y logo sólido) en la página de Cotizar, asegurando legibilidad sobre el fondo blanco.
- **UX Formulario:** Ajustes iniciales en el formulario de cotización para reflejar la identidad visual de la marca.

### Commit `9f6dac8` - refactor: aplicar SectionTitle y Button en todas las secciones principales
**Descripción de la implementación:**
- **Estandarización:** Se reemplazaron botones y títulos genéricos por los componentes `Button` (con efectos de brillo) y `SectionTitle` (con resaltado en itálica/azul) en todo el sitio para asegurar coherencia visual.

### Commit `f597742` - feat: unificación de estilos en index.css y sistema de tokens por página
**Descripción de la implementación:**
- **Institucionalización del CSS:** Se crearon los bloques de variables CSS (`:root`) divididos por secciones. Esto permite que Rodrigo cambie un color en el CSS y se actualice todo el sitio sin tocar el código React.

---

## 🛠️ Febrero 11-12, 2026: Inicio y Estructura Core

### Commit `e04a392` - Agregada guía de GitHub y propuesta de arquitectura
**Descripción de la implementación:**
- Creación de documentación base para el flujo de trabajo colaborativo.
- Definición de la estructura de carpetas `components/`, `pages/` y `assets/`.

---
*Este documento se actualiza automáticamente después de cada sesión importante.*
