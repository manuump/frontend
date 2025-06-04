import axios from 'axios';

const API_URL = 'http://localhost:8089/admin';

const getAllUsers = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/usuarios`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const deleteUser = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${API_URL}/usuarios/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const changeRole = async (id, nuevoRol) => {
  const token = localStorage.getItem('token');
  await axios.put(`${API_URL}/usuarios/${id}/rol`, nuevoRol, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export default {
  getAllUsers,
  deleteUser,
  changeRole,
};
