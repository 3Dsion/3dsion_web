# 🖼️ DIRECTIVA DE CARGA DE IMÁGENES — 3DSION WEB

## Protocolo de ejecución
Cuando Rodrigo indique "ejecutá la directiva de imágenes", debés:

1. Leer `PLAN_PRODUCCION_VISUAL.md` para ver qué imágenes están
   planificadas y en qué sección van.
2. Escanear `src/assets/` y detectar qué archivos nuevos fueron agregados.
3. Cruzar los nombres nuevos contra la tabla del `.md`.
4. Según la sección, actualizar el archivo correspondiente
   según el mapa técnico de abajo.
5. Confirmar qué archivos fueron procesados y cuáles quedaron pendientes.

---

## Mapa Técnico de Secciones

| Prefijo de archivo | Sección | Archivo a actualizar | Campo |
|---|---|---|---|
| `serv-*.webp` | ServicesMosaic (Home) | `src/data/services.json` | `"image"` |
| `case-*.webp` | Casos de Éxito | `src/data/projects.json` | `"image"` |
| `ing-*.webp` | Ingeniería | JSON o `.jsx` de `/ingenieria` | `"image"` |
| `prod-*.webp` | Producción en Serie | JSON o `.jsx` de `/produccion-en-serie` | `"image"` |
| `gf-*.webp` | Gran Formato | JSON o `.jsx` de `/gran-formato` | `"image"` |
| `proto-*.webp` | Prototipado | JSON o `.jsx` de `/prototipado` | `"image"` |
| `mod-*.webp` | Modelado | JSON o `.jsx` de `/modelado-y-desarrollo` | `"image"` |
| `inv-*.webp` | Ingeniería Inversa | JSON o `.jsx` de `/ingenieria-inversa` | `"image"` |
| `trayectoria-*.webp` | Trayectoria | JSON o `.jsx` de `/trayectoria` | `"image"` |
| `proto-laboratorio.webp` | Prototipado (lateral) | `src/pages/soluciones/Prototipado.jsx` | `import` estático |
| `ing-lateral.webp` | Ingeniería (lateral) | `src/pages/soluciones/Ingenieria.jsx` | `import` estático |
| `prod-lateral.webp` | Producción en Serie (lateral) | `src/pages/soluciones/Produccion.jsx` | `import` estático |
| `gf-lateral.webp` | Gran Formato (lateral) | `src/pages/soluciones/GranFormato.jsx` | `import` estático |
| `mod-lateral.webp` | Modelado (lateral) | `src/pages/soluciones/Modelado.jsx` | `import` estático |
| `inv-lateral.webp` | Ingeniería Inversa (lateral) | `src/pages/soluciones/IngenieriaInversa.jsx` | `import` estático |

---

## Método de inserción según tipo

- **JSON dinámico** (`services.json`, `projects.json`, otros):
  → Actualizar el campo `"image": "nombre-archivo.webp"` del ítem correspondiente.
  → El archivo debe estar en `src/assets/` con el nombre exacto.

- **Import estático** (`.jsx` con `import logo from ...`):
  → Actualizar el `import` y su referencia en el componente.

- **`new URL` dinámico** (Vite):
  → Solo verificar que el archivo esté en `src/assets/`
    y el nombre coincida exactamente con el valor en el JSON.

---

## ⚠️ Reglas de seguridad

- ❌ Nunca renombrar archivos de imagen.
- ❌ Nunca mover imágenes fuera de `src/assets/`.
- ❌ Nunca tocar `company.json` en esta directiva
  (ese archivo es solo de datos institucionales, no de imágenes).
- ✅ Si un nombre de archivo no coincide con ninguna entrada
  del `PLAN_PRODUCCION_VISUAL.md`, reportarlo a Rodrigo
  antes de hacer cualquier cambio.
- ✅ Siempre hacer commit después de procesar imágenes
  con el mensaje: `assets: carga de imágenes [nombre-archivo]`
