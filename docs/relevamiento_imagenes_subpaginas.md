# Relevamiento de Imágenes — Subpáginas de Soluciones

**Fecha:** 2026-03-12  
**Archivos existentes en `/src/assets/`:** `proto-hero.webp`, `proto-card-1.webp`, `serv-prototipado.webp`, `trayectoria-origen.webp`, `trayectoria-pilares.webp`, logos (`.png`)

> [!IMPORTANT]
> **Convención de nombres detectada:** `{prefijo-página}-{sección}.webp`  
> Ejemplo: `proto-hero.webp`, `proto-card-1.webp`

---

## 1. `/prototipado` — [Prototipado.jsx](file:///e:/ANTIGRAVITY/3dsion_web/src/pages/soluciones/Prototipado.jsx)

| Sección | Uso en código | Archivo actual | Estado |
|---|---|---|---|
| **Hero** (fondo fullwidth) | `<img src={protoHero}>` importado L9 | `proto-hero.webp` | ✅ Existe |
| **Card "Pilares Técnicos" #1** — Validación de Ensambles | `<img src={protoCard1}>` importado L10 | `proto-card-1.webp` | ✅ Existe |
| **Card "Pilares Técnicos" #2** — Ensayos de Campo | Usa `protoHero` como fallback (L94) | ⚠️ Reutiliza `proto-hero.webp` | 🟡 Falta → `proto-card-2.webp` |
| **Card "Pilares Técnicos" #3** — Precisión Dimensional | Usa `protoHero` como fallback (L94) | ⚠️ Reutiliza `proto-hero.webp` | 🟡 Falta → `proto-card-3.webp` |
| **Sección "Laboratorio de Desarrollo"** (imagen lateral) | Ícono `<TestTube2>` placeholder (L143) | ❌ Sin imagen | 🔴 Falta → `proto-laboratorio.webp` |

---

## 2. `/ingenieria` — [Ingenieria.jsx](file:///e:/ANTIGRAVITY/3dsion_web/src/pages/soluciones/Ingenieria.jsx)

| Sección | Uso en código | Archivo actual | Estado |
|---|---|---|---|
| **Hero** (fondo fullwidth) | `<div>` con `animate-pulse` placeholder (L66) | ❌ Comentado en L10 | 🔴 Falta → `ing-hero.webp` |
| **Card "Pilares" #1** — Auditoría de Factibilidad | String `"ing-dfm-bg.webp"` en data (L21), `<div>` placeholder (L106) | ❌ No importado | 🔴 Falta → `ing-card-1.webp` |
| **Card "Pilares" #2** — Validación de Ensambles | String `"ing-validacion-bg.webp"` en data (L27), placeholder | ❌ No importado | 🔴 Falta → `ing-card-2.webp` |
| **Card "Pilares" #3** — Optimización de Materiales | String `"ing-optimizacion-bg.webp"` en data (L33), placeholder | ❌ No importado | 🔴 Falta → `ing-card-3.webp` |
| **Sección "Garantía Técnica"** (imagen lateral) | Ícono `<Cpu>` placeholder (L150) | ❌ Sin imagen | 🔴 Falta → `ing-garantia.webp` |

---

## 3. `/produccion-en-serie` — [Produccion.jsx](file:///e:/ANTIGRAVITY/3dsion_web/src/pages/soluciones/Produccion.jsx)

| Sección | Uso en código | Archivo actual | Estado |
|---|---|---|---|
| **Hero** (fondo fullwidth) | `<div>` con `animate-pulse` placeholder (L54) | ❌ Sin imagen | 🔴 Falta → `prod-hero.webp` |
| **Card "Pilares" #1** — Series Cortas | `<div>` placeholder (L92) | ❌ Sin imagen | 🔴 Falta → `prod-card-1.webp` |
| **Card "Pilares" #2** — Auditoría de Calidad | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `prod-card-2.webp` |
| **Card "Pilares" #3** — Inventario Digital | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `prod-card-3.webp` |
| **Sección "Ventajas Granja 3D"** (imagen lateral) | Ícono `<Factory>` placeholder (L137) | ❌ Sin imagen | 🔴 Falta → `prod-granja.webp` |

---

## 4. `/gran-formato` — [GranFormato.jsx](file:///e:/ANTIGRAVITY/3dsion_web/src/pages/soluciones/GranFormato.jsx)

| Sección | Uso en código | Archivo actual | Estado |
|---|---|---|---|
| **Hero** (fondo fullwidth) | `<div>` con `animate-pulse` placeholder (L54) | ❌ Sin imagen | 🔴 Falta → `gf-hero.webp` |
| **Card "Pilares" #1** — Volumen Extendido | `<div>` placeholder (L92) | ❌ Sin imagen | 🔴 Falta → `gf-card-1.webp` |
| **Card "Pilares" #2** — Geometrías a Escala Real | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `gf-card-2.webp` |
| **Card "Pilares" #3** — Estabilidad Estructural | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `gf-card-3.webp` |
| **Sección "Capacidad Industrial"** (imagen lateral) | Ícono `<Cuboid>` placeholder (L137) | ❌ Sin imagen | 🔴 Falta → `gf-capacidad.webp` |

---

## 5. `/modelado-y-desarrollo` — [Modelado.jsx](file:///e:/ANTIGRAVITY/3dsion_web/src/pages/soluciones/Modelado.jsx)

| Sección | Uso en código | Archivo actual | Estado |
|---|---|---|---|
| **Hero** (fondo fullwidth) | `<div>` con `animate-pulse` placeholder (L54) | ❌ Sin imagen | 🔴 Falta → `mod-hero.webp` |
| **Card "Pilares" #1** — Fidelidad CAD | `<div>` placeholder (L92) | ❌ Sin imagen | 🔴 Falta → `mod-card-1.webp` |
| **Card "Pilares" #2** — Eficiencia de Geometría | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `mod-card-2.webp` |
| **Card "Pilares" #3** — Geometría Imprimible | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `mod-card-3.webp` |
| **Sección "Ingeniería Digital"** (imagen lateral) | Ícono `<Code2>` placeholder (L137) | ❌ Sin imagen | 🔴 Falta → `mod-ingenieria.webp` |

---

## 6. `/ingenieria-inversa` — [IngenieriaInversa.jsx](file:///e:/ANTIGRAVITY/3dsion_web/src/pages/soluciones/IngenieriaInversa.jsx)

| Sección | Uso en código | Archivo actual | Estado |
|---|---|---|---|
| **Hero** (fondo fullwidth) | `<div>` con `animate-pulse` placeholder (L54) | ❌ Sin imagen | 🔴 Falta → `inv-hero.webp` |
| **Card "Pilares" #1** — Escaneo Metrológico | `<div>` placeholder (L92) | ❌ Sin imagen | 🔴 Falta → `inv-card-1.webp` |
| **Card "Pilares" #2** — Reconstrucción Paramétrica | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `inv-card-2.webp` |
| **Card "Pilares" #3** — Ajuste de Sustitución | `<div>` placeholder | ❌ Sin imagen | 🔴 Falta → `inv-card-3.webp` |
| **Sección "Soluciones Críticas"** (imagen lateral) | Ícono `<Search>` placeholder (L137) | ❌ Sin imagen | 🔴 Falta → `inv-soluciones.webp` |

---

## Resumen General

| Página | ✅ Reales | 🟡 Reutilizadas | 🔴 Faltan |
|---|---|---|---|
| `/prototipado` | 2 | 2 | 1 |
| `/ingenieria` | 0 | 0 | 5 |
| `/produccion-en-serie` | 0 | 0 | 5 |
| `/gran-formato` | 0 | 0 | 5 |
| `/modelado-y-desarrollo` | 0 | 0 | 5 |
| `/ingenieria-inversa` | 0 | 0 | 5 |
| **TOTAL** | **2** | **2** | **26** |

> [!WARNING]
> **26 imágenes pendientes** + 2 reutilizadas que deberían ser únicas = **28 assets nuevos necesarios**.

### Patrón de secciones en todas las páginas (idéntico layout):
1. **Hero** → 1 imagen de fondo (fullwidth, con overlay gradiente)
2. **Cards "Pilares Técnicos"** → 3 imágenes (fondo de card con overlay oscuro)
3. **Sección lateral** (Garantía/Laboratorio/etc.) → 1 imagen (aspect-video, actualmente solo ícono Lucide)
4. **Steps / Metodología** → Sin imágenes (solo texto)
5. **CTA Final** → Sin imágenes (solo glow effects CSS)
