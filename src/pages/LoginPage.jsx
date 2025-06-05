import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import '../styles/LoginRegisterPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login(username, password); 
      navigate('/eventos'); 
    } catch (error) {
      alert('Login fallido');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          className="auth-input"
          value={username}
          placeholder="Nombre de usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="auth-input"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default LoginPage;
