# Guía de Trabajo con Git y GitHub

Esta guía explica los pasos que hemos seguido para mantener copias de seguridad ("backups") de tu código y cómo puedes subirlo a GitHub para proteger tu trabajo y colaborar en el futuro.

## 1. ¿Qué hemos hecho hasta ahora?

En el mundo del desarrollo, no llamamos a esto "backup", sino **Control de Versiones**. Hemos usado una herramienta llamada **Git**.

### Comandos realizados por la IA:
1.  **`git init`**: Inicializamos el repositorio. Esto crea una carpeta oculta llamada `.git` que lleva el registro de todos los cambios.
2.  **`git add .`**: Preparamos todos los archivos del proyecto para ser guardados. Es como poner los archivos en una caja antes de cerrarla.
3.  **`git commit -m "Estado inicial del proyecto 3Dsion - primer backup"`**: Cerramos la "caja" y le pusimos una etiqueta. Esto crea un punto en la historia al que siempre podemos volver.

---

## 2. Conceptos Clave

-   **Repositorio (Repo):** La carpeta de tu proyecto controlada por Git.
-   **Commit:** Una "foto" de tu código en un momento específico. Cada commit tiene un mensaje descriptivo.
-   **Rama (Branch):** Una línea de tiempo de tu código. La principal suele llamarse `main` o `master`.
-   **Remote (Remoto):** Una copia de tu repositorio que vive en la nube (como GitHub).

---

## 3. ¿Cómo subirlo a GitHub?

Si quieres tener tu código en GitHub, sigue estos pasos:

### Paso A: Crear el repositorio en GitHub
1.  Ve a [github.com](https://github.com) y crea un nuevo repositorio llamado `3dsion_web`.
2.  **No** lo inicialices con README, .gitignore o licencia (déjalos vacíos).

### Paso B: Vincular tu PC con GitHub
Copia y pega estos comandos en tu terminal (dentro de la carpeta del proyecto):

```bash
# 1. Agregamos la dirección de tu repo en GitHub (reemplaza con tu link real)
git remote add origin https://github.com/TU_USUARIO/3dsion_web.git

# 2. Renombramos la rama principal a 'main' (estándar moderno)
git branch -M main

# 3. Subimos el código por primera vez
git push -u origin main
```

---

## 4. Flujo Diario Recomendado

Cada vez que hagamos cambios importantes, el proceso es:

1.  **`git add .`** (Preparar cambios)
2.  **`git commit -m "Descripción de lo que se hizo"`** (Guardar localmente)
3.  **`git push`** (Subir a la nube / GitHub)

---

## 5. ¿Por qué es importante?

-   **Seguridad:** Si tu PC falla, el código está a salvo en GitHub.
-   **Historial:** Podemos ver qué cambió hace una semana y por qué.
-   **Reversión:** Si cometemos un error grave, podemos volver a una versión anterior fácilmente.

---

## 6. Sobre el Correo y la Identidad

Para el primer commit, usamos un correo de ejemplo. Ahora ya hemos configurado tu identidad real en este proyecto:

*   **Nombre:** Rodrigo
*   **Correo:** info@3dsion.com

### ¿Cómo lo cambié?
He ejecutado estos comandos por ti en la terminal:
```bash
git config user.name "Rodrigo"
git config user.email "info@3dsion.com"
```

> [!IMPORTANT]
> A partir de ahora, cada vez que hagamos un nuevo "backup" (commit), quedará guardado con tu nombre y correo oficial. Esto facilitará la conexión con tu cuenta de GitHub más adelante.
