import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import '../styles/LoginRegisterPage.css';

function RegisterPage() {
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await authService.register(username, email, password);
      navigate('/login'); 
    } catch (error) {
      alert('Registro fallido');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Registro</h2>
        <input
          type="text"
          className="auth-input"
          value={username}
          placeholder="Nombre de usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="auth-input"
          value={email}
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="auth-input"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleRegister}>Registrarse</button>
      </div>
    </div>
  );
}

export default RegisterPage;
