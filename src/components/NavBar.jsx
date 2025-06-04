import { Link, useNavigate, useLocation } from 'react-router-dom';
import authService from '../services/authService';
import { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAdminRole = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const payloadBase64 = token.split('.')[1];
      const payload = JSON.parse(atob(payloadBase64));
      return payload.role === 'ADMIN';
    } catch (e) {
      return false;
    }
  };

  const checkLoggedIn = () => {
    return !!localStorage.getItem('token');
  };

  useEffect(() => {
    setIsAdmin(checkAdminRole());
    setIsLoggedIn(checkLoggedIn());
  }, [location]);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
      <div>
        <Link to="/">Inicio</Link>{' | '}
        {!isLoggedIn && <>
          <Link to="/login">Login</Link>{' | '}
          <Link to="/register">Registro</Link>{' | '}
        </>}
        {isLoggedIn && <>
          <Link to="/dashboard">Dashboard</Link>{' | '}
          <Link to="/eventos">Eventos</Link>
          {isAdmin && <> | <Link to="/admin/usuarios">Panel Admin</Link></>}
        </>}
      </div>

      {isLoggedIn && (
        <div>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
