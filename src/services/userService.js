import axios from 'axios';

const API_URL = 'http://localhost:8089/admin';

const getAllUsers = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/usuarios`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const createUser = async (user) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/usuarios`, user, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { getAllUsers, createUser };
