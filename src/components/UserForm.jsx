import { useState } from 'react';
import userService from '../services/userService';

function UserForm({ onUserCreated }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('USUARIO');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.createUser({ nombre: username, email, password, rol });
      onUserCreated(); 
      setUsername('');
      setEmail('');
      setPassword('');
      setRol('');
    } catch (err) {
      alert('Error al crear usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nombre" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
      <select value={rol} onChange={e => setRol(e.target.value)}>
        <option value="USUARIO">USUARIO</option>
        <option value="EMPRESA">EMPRESA</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <button type="submit">Crear usuario</button>
    </form>
  );
}

export default UserForm;
