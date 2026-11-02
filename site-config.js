/*
 * Configuración pública del sitio.
 *
 * FormSubmit requiere que el titular del email confirme el primer mensaje de
 * activación. Hasta completar esa confirmación, el servicio no entregará
 * consultas. Si se migra a un endpoint propio, reemplazar `endpoint` por la
 * URL HTTPS del endpoint y conservar las validaciones del formulario.
 *
 * Para activar analítica sin cookies con Plausible:
 * 1. Crear el sitio tbrws.com en Plausible.
 * 2. Cambiar provider a "plausible".
 * 3. Completar scriptSrc con la URL de script provista por Plausible.
 * No agregar IDs ni tokens ficticios.
 */
window.TBR_CONFIG = Object.freeze({
  contact: {
    provider: 'FormSubmit',
    endpoint: 'https://formsubmit.co/ajax/tomasbenjaminramos2000@gmail.com'
  },
  analytics: {
    provider: 'disabled',
    domain: 'tbrws.com',
    scriptSrc: ''
  }
});
