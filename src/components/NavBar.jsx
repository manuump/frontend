import { Link, useNavigate, useLocation } from 'react-router-dom';
import authService from '../services/authService';
import { useEffect, useState } from 'react';
import '../styles/NavBar.css'; 
import logo from '../assets/logo.PNG'; 

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEmpresa, setIsEmpresa] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getRoleFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payloadBase64 = token.split('.')[1];
      const payload = JSON.parse(atob(payloadBase64));
      return payload.role; 
    } catch (e) {
      return null;
    }
  };

  const checkLoggedIn = () => {
    return !!localStorage.getItem('token');
  };

  useEffect(() => {
    const role = getRoleFromToken();
    setIsAdmin(role === 'ADMIN');
    setIsEmpresa(role === 'EMPRESA');
    setIsLoggedIn(checkLoggedIn());
  }, [location]);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsEmpresa(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
        <Link to="/" className="navbar-title">OCIOJAÉN</Link>
      </div>

      <div className="nav-links">
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registro</Link>
            <Link to="/contacto">Contacto</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Mi Perfil</Link>
            <Link to="/eventos">Eventos</Link>
            {isEmpresa && <Link to="/mis-eventos">Mis Eventos</Link>}
            {isAdmin && <Link to="/admin/usuarios">Panel Admin</Link>}
            {isEmpresa && <Link to="/crear-evento">Crear Evento</Link>}
          </>
        )}
      </div>

      {isLoggedIn && (
        <div className="navbar-right">
          <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
