---
name: web_architecture
description: Define la estructura y estándares del proyecto Vite + React.
---

# Web Architecture Skill

Este skill define cómo estructurar el sitio web para asegurar escalabilidad y orden.

## Estructura de Carpetas
```text
src/
├── assets/         # Imágenes, iconos y fuentes.
├── components/     # Componentes de React reutilizables.
│   ├── ui/         # Componentes básicos (botones, inputs).
│   ├── layout/     # Navbar, Footer, Contenedores.
│   └── sections/   # Secciones de la página (Hero, Projects, Contact).
├── hooks/          # Hooks personalizados de React.
├── data/           # Archivos JSON con el contenido (Proyectos, Servicios).
├── styles/         # Archivos CSS globales y configuración.
└── App.jsx         # Componente principal con el routing o scroll logic.
```

## Estándares de Código
- **Componentes:** Usar nombres en PascalCase (e.g., `HeroSection.jsx`).
- **Props:** Definir siempre que sea posible o usar desestructuración.
- **Vite:** Mantener la configuración ligera; usar `import` absolutos si el proyecto crece.

## Gestión de Estilos y Color
Para mantener el control visual centralizado (el "Panel de Control"), siempre debemos seguir estas reglas:
- **Variables CSS:** Prohibido usar colores fijos (hex/rgb) directamente en los componentes JSX. Todos los colores deben nacer en `src/index.css` como variables `:root`.
- **Tokens por Página:** Al crear una página nueva, crear un bloque de variables específico (e.g., `--home-bg`, `--cotizar-bg`) para que sean independientes.
- **Documentación Operativa:** Cada bloque de variables en el CSS debe llevar comentarios que expliquen qué elemento controla, para que el usuario pueda ajustarlo sin ver el código.
- **Acceso Directo:** El archivo `index.css` debe estructurarse como un panel de configuración intuitivo.

## Contenido Hardcoded
Para proyectos y servicios, usaremos archivos en `src/data/` para separar la lógica de la vista:
1. Crear `projects.json`.
2. Mapear los datos en el componente `ProjectGrid.jsx`.
