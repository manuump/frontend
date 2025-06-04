import { useEffect, useState } from 'react';
import userService from '../services/userService';
import UserList from '../components/UserList';

function AdminUserPage() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const data = await userService.getAllUsers();
      setUsers(data);
    } catch (err) {
      alert('No se pudieron cargar los usuarios');
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>Gestión de usuarios</h2>
      <UserList
        users={users}
        onUserDeleted={loadUsers}
        onRoleChanged={loadUsers}
      />
    </div>
  );
}

export default AdminUserPage;
