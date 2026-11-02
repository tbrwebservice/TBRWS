# Puesta en producción de tbrws.com

## Acciones necesarias fuera del repositorio

### Forzar HTTPS

El dominio actual responde por HTTP y HTTPS. En Cloudflare, crear una Redirect Rule con:

- Condición: `http.request.full_uri starts_with "http://tbrws.com/"`
- Destino dinámico: `concat("https://tbrws.com", http.request.uri.path)`
- Código: `301` o `308`
- Conservar query string: activado.

Luego activar **Always Use HTTPS** y HSTS solo después de confirmar que todos los subdominios usan HTTPS.

### Activar el formulario

El formulario usa FormSubmit con el destinatario público configurado en `dist/site-config.js`. Después del primer envío, FormSubmit enviará un correo de activación al destinatario. Ese correo debe confirmarse para que las consultas se entreguen.

Para migrar a una solución propia, crear un endpoint HTTPS que valide nombre, email y mensaje del lado del servidor, limite solicitudes por IP y use una variable de entorno para el destinatario. Después, reemplazar `contact.endpoint` en `dist/site-config.js` por esa URL; nunca publicar claves de API en archivos estáticos.

### Activar analítica sin cookies

La integración para Plausible está preparada pero desactivada. Crear el sitio `tbrws.com` en la cuenta de Plausible y completar `analytics.provider` y `analytics.scriptSrc` en `dist/site-config.js` con la URL indicada por ese proveedor. Luego, definir en Plausible los objetivos `whatsapp_click`, `email_click` y `contact_form_success`.

Si se elige una herramienta que use cookies no esenciales (por ejemplo, una configuración estándar de Google Analytics), implementar una plataforma de consentimiento antes de cargarla.

### Google Search Console

Verificar la propiedad `https://tbrws.com/` y enviar `https://tbrws.com/sitemap.xml` en Search Console después de publicar estos archivos.
