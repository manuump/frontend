import { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login(email, password);
      navigate('/dashboard');
    } catch (err) {
      alert('Login fallido');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;
