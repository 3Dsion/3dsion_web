# Guía de Exportación de Video para Web (DaVinci Resolve)

Para que el video del Hero de **3Dsion** funcione de manera fluida y sin tirones, sigue estas configuraciones al exportar desde la pestaña **Deliver** en DaVinci Resolve.

## 1. Configuración de Video
*   **Format:** MP4
*   **Codec:** H.264
*   **Resolution:** 
    *   Recomendado: **1920 x 1080 (HD)**. No exportes en 4K (3840x2160) ya que es innecesario para un fondo y consume demasiada GPU.
    *   Si buscas máxima fluidez en móviles: **1280 x 720**.
*   **Frame Rate:** Úsalo en **24**, **25** o **30** fps (debe ser el mismo que tu Timeline). Evita 60 fps para fondos web.

## 2. Configuración de Bitrate (Calidad)
*   **Quality:** Selecciona **Restrict to**.
*   **Kb/s:** Para un video de 1080p, un valor entre **3000 y 5000 Kb/s** es ideal.
    *   *Nota:* Un bitrate mayor a 6000 Kb/s suele causar micro-saltos en navegadores al no poder procesar los datos tan rápido.

## 3. Advanced Settings (Crucial para Fluidez)
*   **Key Frames:** Cámbialo de "Automatic" a **Every 30 frames** (o 24 si usas 24fps).
    *   *Por qué:* Esto asegura que el navegador tenga "puntos de referencia" frecuentes, eliminando micro-cortes durante la reproducción fluida.
*   **Frame Re-ordering:** Desactivado (si la opción aparece, ayuda a que el decodificador trabaje menos).
*   **Encoding Profile:** Main o High.

## 4. Configuración de Audio (Muy Importante)
*   **Export Audio:** **DESACTIVAR** (Debes desmarcar la casilla).
    *   *Por qué:* Un video con pista de audio (aunque esté en silencio) pesa más y hace que el navegador use recursos para decodificar una señal que no se va a usar (el video está `muted` por código).

## 5. Tip de Edición: Bucle Perfecto (Seamless Loop)
1. Coloca tu clip en el timeline.
2. Corta los últimos 2 segundos y muévelos al principio (en una pista superior).
3. Haz una transición de **Cross Dissolve** entre el final del video y ese pedazo que moviste para que el inicio y el fin sean visualmente idénticos.

---
**Resultado esperado:** Un archivo de menos de 10MB que se reproduce instantáneamente y sin carga perceptible para el usuario.
