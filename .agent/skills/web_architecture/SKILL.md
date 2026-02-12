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

## Contenido Hardcoded
Para proyectos y servicios, usaremos archivos en `src/data/` para separar la lógica de la vista:
1. Crear `projects.json`.
2. Mapear los datos en el componente `ProjectGrid.jsx`.
