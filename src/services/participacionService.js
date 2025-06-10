import axios from 'axios';

const API_URL = 'http://localhost:8089/participaciones';

const participarEnEvento = async (eventoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/evento/${eventoId}`, null, config);
  return response.data;
};

const getMisParticipaciones = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

const cancelarParticipacion = async (participacionId) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_URL}/${participacionId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getParticipantesPorEvento = async (eventoId) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/evento/${eventoId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('Participantes recibidos:', response.data); // ← Añade esto para debug

  return response.data;
};

const descargarPdf = async (eventoId) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/evento/${eventoId}/pdf`, {
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'blob'
  });
  const url = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `participantes_evento_${eventoId}.pdf`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};


export default {
  getMisParticipaciones,
  cancelarParticipacion,
  participarEnEvento,
  getParticipantesPorEvento,
  descargarPdf
};
