import { Mail, Phone, MapPin, HelpCircle, Building2 } from "lucide-react";
import "../styles/Contacto.css";

function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Contacto y Asistencia</h2>

      <p className="intro">
        Bienvenido/a al área de <strong>soporte y ayuda</strong> de <strong>OCIOJAEN</strong>, tu plataforma para descubrir el mejor <strong>ocio, cultura y turismo</strong> en Jaén.
      </p>

      <section className="contact-info">
        <h3><HelpCircle size={20} /> ¿Necesitas ayuda?</h3>
        <ul>
          <li><Mail size={18} /> <span>soporte@ociojaen.com</span></li>
          <li><Phone size={18} /> <span>+34 953 000 000</span></li>
          <li><MapPin size={18} /> <span>Calle Fuente del Alamillo, Jaén, España</span></li>
        </ul>
      </section>

      <section className="empresas">
        <h3><Building2 size={20} /> Empresas y Comercios</h3>
        <p>
          ¿Tienes un evento, bar, alojamiento o servicio turístico? <br />
          Escríbenos a <a href="mailto:colaboraciones@ociojaen.com">colaboraciones@ociojaen.com</a> y te ayudaremos a promocionar todos tus eventos/comercios en nuestra plataforma , gracias a la gestion con cuentas empresa.
        </p>
      </section>

      <section className="faq">
        <h3>Preguntas Frecuentes</h3>
        <ul>
          <li><strong>¿Cómo me registro como empresa?</strong> → Primero tienes que contactar con nosotros y te facilitaremos una cuenta como empresa.</li>
          <li><strong>¿Puedo ver la lista de gente que asiste a mis eventos?</strong> → Sí, desde tu panel de gestión.</li>
          <li><strong>¿La plataforma es gratuita?</strong> → Totalmente gratuita para usuarios y empresas.</li>
        </ul>
      </section>

      <p className="final-msg">
        Gracias por confiar en <strong>OCIOJAEN</strong>. Estamos aquí para ayudarte.
      </p>
    </div>
  );
}

export default Contacto;
