---
name: codeart-management
description: Guía de administración de versiones y carpetas para el proyecto CodeArt (Shaders / Raymarching).
---

# 🛠 Gestión de Proyecto: CodeArt

Este documento establece las reglas de oro para la organización de archivos, el control de versiones y el flujo de trabajo entre el usuario y el asistente de IA (Antigravity) para el desarrollo de shaders.

## 1. Estructura de Directorios

El proyecto se organiza en una jerarquía clara para separar el trabajo activo del historial:

- **`CodeArt/`**: Raíz del repositorio y del espacio de trabajo.
- **`CodeArt/Raymarching/`**: Carpeta de **desarrollo activo**. Aquí se encuentran los archivos `shader.frag`, `script.js`, etc., que se están editando actualmente.
- **`CodeArt/Raymarching/Variantes/`**: Almacén de hitos históricos. Contiene copias de versiones estables o experimentos fallidos importantes.

## 2. Convención de Nombres (Naming)

Para mantener la claridad en el historial y en el PC:

- **Carpetas de Variantes**: Deben seguir el formato:
  `shader-port-v[VERSION]-[ESTADO]`
  *Ejemplo:* `shader-port-v0.07-dispersion`
- **Versiones Semánticas**: Se utiliza el formato `v0.XX`.
  - `v0.01`, `v0.02`: Ajustes menores o correcciones.
  - `v0.10`, `v0.20`: Cambios significativos o nuevas funcionalidades.
  - `v1.0.0`: Versión final lista para publicación (fxhash/ArtBlocks).

## 3. Administración de Versiones (GitHub)

El control de versiones se gestiona mediante el **GitHub MCP Server**. 

- **Propiedad del Usuario**: La IA **NUNCA** incrementará el número de versión ni creará etiquetas (Tags) de forma automática. 
- **Acción por Comando**: El incremento de versión solo ocurre cuando el usuario lo pide explícitamente (ej: *"Actualiza a la v0.08"*).
- **Flujo de Git**:
  - Los cambios diarios se registran mediante **Commits** descriptivos.
  - Las versiones oficiales marcadas por el usuario se registran mediante **Tags** en GitHub.

## 4. Mejores Prácticas de Trabajo

1. **No Duplicar por Hábito**: No crear carpetas locales para cambios menores; confiar en el historial de Commits de Git.
2. **Sincronización**: Siempre realizar un `push` a GitHub después de una sesión de trabajo exitosa para asegurar el acceso desde otras computadoras.
3. **Changelog**: Mantener actualizado el archivo `CHANGELOG.md` dentro de la carpeta del proyecto para documentar la evolución creativa.
4. **Archivos Pesados**: Si se incluyen texturas o assets de más de 50MB, notificar para activar Git LFS.

---
*Este Skill asegura que Antigravity actúe siempre como un colaborador ordenado que respeta la autoridad creativa del usuario.*
