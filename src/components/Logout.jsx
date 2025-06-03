import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
}

export default LogoutButton;
