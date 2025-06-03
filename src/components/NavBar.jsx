import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
      <div>
        <Link to="/">Inicio</Link>{' | '}
        <Link to="/login">Login</Link>{' | '}
        <Link to="/register">Registro</Link>{' | '}
        <Link to="/dashboard">Dashboard</Link>{' | '}
        <Link to="/eventos">Eventos</Link>
      </div>

      <div>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
}

export default Navbar;
