function UserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Habilitado</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.rol}</td>
            <td>{user.enabled ? 'Sí' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
