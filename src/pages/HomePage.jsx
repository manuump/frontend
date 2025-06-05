import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import logo from '../assets/logo.PNG';

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-logo-wrapper">
        <img src={logo} alt="Logo OcioJaén" className="home-logo-large" />
      </div>

      <div className="home-overlay">
        <header className="home-header">
          <h1 className="home-title">OCIOJAÉN</h1>
        </header>

        <main className="home-main">
          <p className="home-description">
            Descubre todo el ocio y turismo que ofrece Jaén. Nuestra plataforma conecta a turistas y locales con eventos, actividades y empresas que hacen vibrar nuestra ciudad.
          </p>

          <div className="home-buttons">
            <Link to="/login" className="home-btn">Iniciar Sesión</Link>
            <Link to="/register" className="home-btn">Registrarse</Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
