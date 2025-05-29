import axios from 'axios';

const API_URL = 'http://localhost:8089/eventos';

const getEventos = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export default { getEventos };
