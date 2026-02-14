# Guía de Flujo de Trabajo en GitHub 🚀
Para Rodrigo (3Dsion)

Esta guía explica de forma sencilla cómo usar Git y GitHub para que nunca pierdas tus avances y puedas trabajar en diferentes computadoras sin problemas.

---

## 1. El Ciclo de Trabajo Diario (Guardar Proyectos)

Imagina que Git es una "máquina del tiempo". Cada vez que haces un cambio importante, debes crear un **punto de restauración** (Commit).

### Paso A: Ver qué cambió
Antes de guardar, mira qué archivos tocaste:
```powershell
git status
```

### Paso B: Preparar los archivos
Dile a Git: "Quiero guardar todo esto":
```powershell
git add .
```

### Paso C: Crear el punto de avance (Commit)
Etiqueta tu avance con un mensaje claro:
```powershell
git commit -m "Agregué la sección de contacto y arreglé los botones"
```

### Paso D: Subirlo a la nube (Push)
Envía tus cambios a GitHub (para que estén seguros en la web):
```powershell
git push origin master
```

---

## 2. Cambiar de Computadora (Trabajar en otra PC)

Si tienes el proyecto en la computadora de la oficina y quieres seguir en la de tu casa:

### Al llegar a la nueva PC (La primera vez):
Debes "clonar" (bajar una copia completa) del repositorio:
```powershell
git clone https://github.com/3Dsion/3dsion_web.git
```

### Antes de empezar a trabajar (Siempre):
Para bajarte los últimos cambios que hiciste en la otra compu:
```powershell
git pull origin master
```
> **Nota:** Haz esto siempre antes de tocar cualquier código para evitar conflictos.

---

## 3. Resolviendo el "Rejected" (Pull antes de Push)

Si intentas hacer un `push` y sale un error en rojo que dice `[rejected]`, es porque hiciste cambios en otra PC (o yo hice cambios aquí) y tu computadora actual no los tiene.

**La solución es simple:**
1. Haz un Pull primero: `git pull origin master --rebase`
2. Ahora sí, haz el Push: `git push origin master`

---

## 4. Conceptos Clave para Rodrigo

- **Push**: Subir tus partidas guardadas a la nube (GitHub).
- **Pull**: Bajarte las partidas guardadas de la nube a tu compu actual.
- **Main/Master**: Es el nombre de tu rama principal (donde vive la web real).

---

## 5. ¿Se borra lo anterior cuando hago Push? 💾

**¡No! Nunca se borra.** Esta es la magia de Git.

Cada vez que haces un `commit` y un `push`, no estás "sobreescribiendo" el archivo. Estás **agregando una página nueva** al libro de historia de tu proyecto. GitHub guarda **TODAS** las versiones anteriores para siempre.

---

## 6. ¿Puedo hacer Push sin hacer Commit? 🚫

**No, no se puede.**

Si intentas hacer `push` sin haber hecho `commit` antes, Git te dirá: *"Everything up-to-date"* (Todo está al día). 

¿Por qué? Porque el **Push** es el camión que lleva los paquetes, pero el **Commit** es el paquete cerrado y etiquetado. Si no armas el paquete (Commit), el camión (Push) viaja vacío y no sube nada a la nube.

**El orden obligatorio es:** 
1. `add` (Elegir qué archivos)
2. `commit` (Cerrar el paquete de cambios)
3. `push` (Subirlo a la nube)

---

## 7. Resumen: Los 3 Comandos Mágicos del Final del Día

Cuando termines de trabajar, haz siempre esto en orden:
1. `git add .`
2. `git commit -m "Descripción de lo que hice"`
3. `git push origin master`

¡Y listo! Tu código está a salvo en la nube para que lo abras donde quieras. 😎
