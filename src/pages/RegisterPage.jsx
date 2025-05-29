import { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await authService.register(nombre, email, password);
      navigate('/login');
    } catch (err) {
      alert('Registro fallido');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default RegisterPage;