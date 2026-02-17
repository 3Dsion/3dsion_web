# 📁 ASSETS GUIDE — 3Dsion Web v1.40

Listado completo de archivos de imagen y logo vinculados en el código fuente.
**Todos los assets deben guardarse en `src/assets/`** y usar los formatos indicados.

---

## Trayectoria (Página /trayectoria)

| Archivo | Formato | Descripción |
|---|---|---|
| `trayectoria-origen.webp` | WebP | Imagen de taller de ingeniería tradicional / mesa de dibujo |
| `trayectoria-evolucion.webp` | WebP | Impresora 3D industrial en acción / adopción tecnológica |
| `trayectoria-pilares.webp` | WebP | Pieza técnica terminada o equipo de trabajo |

---

## Soluciones (ServicesMosaic — Home)

| Archivo | Formato | Descripción |
|---|---|---|
| `serv-ingenieria.webp` | WebP | Ingeniería & Co-Creación — diseño mecánico, DFM |
| `serv-serie.webp` | WebP | Producción en Serie — fabricación escalable |
| `serv-gran-formato.webp` | WebP | Gran Formato — impresión de gran escala |
| `serv-prototipado.webp` | WebP | Prototipado & Validación — prototipos funcionales |
| `serv-modelado.webp` | WebP | Modelado & Desarrollo — diseño paramétrico |
| `serv-inversa.webp` | WebP | Ingeniería Inversa — digitalización de piezas |

---

## Logos de Software (TechAuthority — Home)

| Archivo | Formato | Descripción |
|---|---|---|
| `logo-sw.svg` | SVG | Logo de SolidWorks |
| `logo-fusion.svg` | SVG | Logo de Fusion 360 |
| `logo-rhino.svg` | SVG | Logo de Rhinoceros |
| `logo-acad.svg` | SVG | Logo de AutoCAD |
| `logo-blender.svg` | SVG | Logo de Blender |
| `logo-inventor.svg` | SVG | Logo de Inventor |
| `logo-prusa.svg` | SVG | Logo de PrusaSlicer |

---

## Ingeniería (Página /ingenieria)

| Archivo | Formato | Descripción |
|---|---|---|
| `ing-hero.webp` | WebP | Ensamble industrial complejo en CAD |
| `ing-card-1.webp` | WebP | Consultoría de factibilidad técnica (mapas de calor o espesores) |
| `ing-card-2.webp` | WebP | Vista de ensamble mecánico o detección de interferencias |
| `ing-card-3.webp` | WebP | Pieza con diseño generativo o estructura interna tipo lattice |

---

## Producción en Serie (Página /produccion-en-serie)

| Archivo | Formato | Descripción |
|---|---|---|
| `prod-hero.webp` | WebP | Granja de impresoras 3D produciendo en lote |
| `prod-card-1.webp` | WebP | Lote de piezas idénticas / escalabilidad |
| `prod-card-2.webp` | WebP | Logística / entrega programada |
| `prod-card-3.webp` | WebP | Inventario digital / archivos 3D en pantalla |

---

## Gran Formato (Página /gran-formato)

| Archivo | Formato | Descripción |
|---|---|---|
| `gf-hero.webp` | WebP | Impresora 3D de gran formato en acción |
| `gf-card-1.webp` | WebP | Pieza de gran volumen / integridad estructural |
| `gf-card-2.webp` | WebP | Maqueta o prototipo a escala real |
| `gf-card-3.webp` | WebP | Pieza con acabado estructural robusto |

---

## Prototipado & Validación (Página /prototipado)

| Archivo | Formato | Descripción |
|---|---|---|
| `proto-hero.webp` | WebP | Prototipo funcional en pruebas de campo |
| `proto-card-1.webp` | WebP | Iteración rápida / múltiples versiones |
| `proto-card-2.webp` | WebP | Prueba funcional / ensayo mecánico |
| `proto-card-3.webp` | WebP | Verificación dimensional con calibre |

---

## Modelado & Desarrollo (Página /modelado-y-desarrollo)

| Archivo | Formato | Descripción |
|---|---|---|
| `mod-hero.webp` | WebP | Pantalla CAD con modelado paramétrico |
| `mod-card-1.webp` | WebP | Fidelidad CAD / modelo sólido preciso |
| `mod-card-2.webp` | WebP | Optimización topológica / reducción de peso |
| `mod-card-3.webp` | WebP | Geometría DfM / pieza preparada para impresión |

---

## Ingeniería Inversa (Página /ingenieria-inversa)

| Archivo | Formato | Descripción |
|---|---|---|
| `inv-hero.webp` | WebP | Escaneo 3D de pieza industrial |
| `inv-card-1.webp` | WebP | Captura de geometría / nube de puntos |
| `inv-card-2.webp` | WebP | Conversión STL a STEP / modelado sólido |
| `inv-card-3.webp` | WebP | Repuesto fabricado vs pieza original |

---

## Instrucciones

1. Guardar todos los archivos en `src/assets/`
2. **WebP**: Resolución recomendada 1200×800px, calidad 80-85%
3. **SVG**: Preferir SVG optimizados (sin metadatos innecesarios)
4. **Nomenclatura**: `[ruta]-hero.webp` para heroes, `[ruta]-card-n.webp` para tarjetas
5. Al cargar cada archivo, remover el placeholder correspondiente del código
