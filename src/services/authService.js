import axios from 'axios';

const API_URL = 'http://localhost:8089/auth'; 

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem('token', response.data); 
};

const register = async (username, email, password) => {
  await axios.post(`${API_URL}/register`, { username, email, password });
};

const logout = () => {
  localStorage.removeItem('token');
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
