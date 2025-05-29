import axios from 'axios';

const API_URL = 'http://localhost:8089/auth';

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
};

const register = async (nombre, email, password) => {
  await axios.post(`${API_URL}/register`, { nombre, email, password });
};

export default { login, register };