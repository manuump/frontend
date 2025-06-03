import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function LoginPage() {
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login(username, password); 
      navigate('/dashboard'); // redirige tras login
    } catch (error) {
      alert('Login fallido');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"  
        value={username}
        placeholder="Nombre de usuario"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;
