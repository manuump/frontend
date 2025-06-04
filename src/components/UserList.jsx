import { useState, useEffect } from 'react';
import userService from '../services/userService';

function UserList({ users, onUserDeleted, onRoleChanged }) {
  const [filtro, setFiltro] = useState('TODOS');

  const handleDelete = async (id) => {
    await userService.deleteUser(id);
    onUserDeleted();
  };

  const handleRoleChange = async (id, nuevoRol) => {
    await userService.changeRole(id, { tipo: nuevoRol });
    onRoleChanged();
  };

  const usuariosFiltrados = users.filter(user =>
    filtro === 'TODOS' || user.tipo === filtro
  );

  return (
    <div>
      <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        <option value="TODOS">Todos</option>
        <option value="USUARIO">USUARIO</option>
        <option value="EMPRESA">EMPRESA</option>
        <option value="ADMIN">ADMIN</option>
      </select>

      <ul>
        {usuariosFiltrados.map(user => (
          <li key={user.id}>
            {user.username} ({user.email}) - 
            <select
              value={user.tipo}
              onChange={(e) => handleRoleChange(user.id, e.target.value)}
            >
              <option value="USUARIO">USUARIO</option>
              <option value="EMPRESA">EMPRESA</option>
              <option value="ADMIN">ADMIN</option>
            </select>
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
