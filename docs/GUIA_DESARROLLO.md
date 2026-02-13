# Guía de Desarrollo Local - 3Dsion Web

Este documento explica cómo mantener el entorno de desarrollo funcionando correctamente en tu PC.

## 1. Iniciar el Servidor
Para ver los cambios que haces en el código en tiempo real, el "motor" (Vite) debe estar encendido.

**Comando:**
Ejecutar en la terminal del proyecto:
```bash
npm run dev
```

## 2. Verificar que está Corriendo
Una vez ejecutado, la terminal debe mostrar:
- `➜ Local:   http://localhost:5173/` (Para ver en la misma PC)
- `➜ Network: http://192.168.0.35:5173/` (Para ver desde otros dispositivos)

> [!IMPORTANT]
> **No cierres la terminal.** Si cerrás la ventana de la terminal o apretás `Ctrl + C`, el sitio dejará de funcionar y verás el error `ERR_CONNECTION_REFUSED`.

## 3. Solución de Problemas Comunes

### Error: `ERR_CONNECTION_REFUSED`
**Causa:** El servidor no está corriendo o se cerró accidentalmente.
**Solución:** Volver a ejecutar `npm run dev`.

### Error: Página en Blanco (Local)
**Causa:** Conflicto técnico con el "Base Path" o caché del navegador.
**Solución:** 
1. Limpiar caché con `Ctrl + F5`.
2. Verificar que en `App.jsx` la lógica de `basename` esté correcta.

### Acceso por IP (192.168.x.x) no funciona
**Causa:** Firewall de Windows o VPN activa.
**Solución:** 
1. Asegurate de que la VPN esté APAGADA para tráfico local.
2. Verificá que el comando en `package.json` sea `vite --host` (esto permite el acceso por IP).

## 4. Flujo de Trabajo Recomendado
1. Abrir VS Code.
2. Abrir terminal integrada (`Ctrl + J`).
3. Ejecutar `npm run dev`.
4. Minimizar la terminal (pero no cerrarla).
5. Trabajar en el sitio.
