import '../styles/Contacto.css'

function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Contacto y Ayuda</h2>
      <p>
        Bienvenido/a al apartado de <strong>Contacto y Ayuda</strong> de <strong>OCIOJAEN</strong>.
      </p>
      <p>
        Esta plataforma nace con el objetivo de promocionar el <strong>ocio, cultura, gastronomía y turismo</strong> en la provincia de Jaén.
        Ya seas un <strong>turista</strong> buscando planes o una <strong>empresa local</strong> interesada en publicitar tus servicios, ¡estás en el lugar adecuado!
      </p>

      <h3>¿Tienes dudas o necesitas asistencia?</h3>
      <ul>
        <li><strong>📧 Correo electrónico:</strong> <a href="mailto:soporte@ociojaen.com">soporte@ociojaen.com</a></li>
        <li><strong>📱 Teléfono:</strong> +34 953 000 000</li>
        <li><strong>📍 Oficina:</strong> Calle Ejemplo 1, Jaén, España</li>
      </ul>

      <h3>Empresas / Comercios</h3>
      <p>
        Si tienes un evento, bar, alojamiento o servicio turístico y quieres aparecer en la plataforma, escríbenos a
        <a href="mailto:colaboraciones@ociojaen.com"> colaboraciones@ociojaen.com</a> o crea tu cuenta como empresa desde la sección de registro.
      </p>

      <h3>Preguntas Frecuentes (FAQ)</h3>
      <ul>
        <li>¿Cómo me registro como empresa? → Desde el botón “Registrarse” elige el rol “Empresa”.</li>
        <li>¿Puedo editar mis eventos una vez publicados? → Sí, desde tu panel de gestión.</li>
        <li>¿La plataforma es gratuita? → Sí, tanto para usuarios como para empresas.</li>
      </ul>

      <p>Gracias por confiar en <strong>OCIOJAEN</strong>. ¡Estamos aquí para ayudarte!</p>
    </div>
  );
}

export default Contacto;