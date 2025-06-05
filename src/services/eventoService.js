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

const crearEvento = async (evento) => {
  const token = localStorage.getItem('token');
  return axios.post(API_URL, evento, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getMisEventos = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/mis-eventos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const eliminarEvento = (id) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export default {
  getMisEventos,
  crearEvento,
  eliminarEvento,
  getEventos,
};

