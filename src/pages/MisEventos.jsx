import { useEffect, useState } from 'react';
import eventoService from '../services/eventoService';
import participacionService from '../services/participacionService';
import { useNavigate } from 'react-router-dom';
import '../styles/MisEventos.css';

function MisEventos() {
  const [eventos, setEventos] = useState([]);
  const [participantesEvento, setParticipantesEvento] = useState({});
  const [mostrarParticipantes, setMostrarParticipantes] = useState({});
  const navigate = useNavigate();

  const fetchEventos = async () => {
    try {
      const res = await eventoService.getMisEventos();
      setEventos(res.data);
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await eventoService.eliminarEvento(id);
      fetchEventos();
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
    }
  };

  const toggleParticipantes = async (eventoId) => {
    if (participantesEvento[eventoId] !== undefined) {
      setMostrarParticipantes(prev => ({
        ...prev,
        [eventoId]: !prev[eventoId]
      }));
      return;
    }

    try {
      setMostrarParticipantes(prev => ({ ...prev, [eventoId]: true }));
      const participantes = await participacionService.getParticipantesPorEvento(eventoId);
      console.log('Datos recibidos para evento', eventoId, ':', participantes);

      setParticipantesEvento(prev => ({
        ...prev,
        [eventoId]: Array.isArray(participantes) ? participantes : [participantes]
      }));
    } catch (error) {
      console.error('Error al cargar participantes:', error);
      setParticipantesEvento(prev => ({ ...prev, [eventoId]: [] }));
    }
  };

  const handleDescargarPdf = async (eventoId) => {
    try {
      await participacionService.descargarPdf(eventoId);
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
    }
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  return (
    <div className="eventos-container">
      <h2 className="eventos-title">Mis Eventos</h2>
      <button className="btn-principal" onClick={() => navigate('/crear-evento')}>Crear Evento</button>

      {eventos.length === 0 ? (
        <p>No has creado eventos todavía.</p>
      ) : (
        <div className="eventos-grid">
          {eventos.map((evento) => (
            <div key={evento.id} className="evento-card">
              <img src={evento.imagenUrl} alt={evento.nombre} className="evento-imagen" />
              <div className="evento-info">
                <h3 className="evento-nombre">{evento.nombre}</h3>
                <p className="evento-descripcion">{evento.descripcion}</p>
                <p className="evento-detalle"><strong>Ubicación:</strong> {evento.ubicacion}</p>
                <p className="evento-detalle"><strong>Fecha:</strong> {new Date(evento.fecha).toLocaleString()}</p>

                <button className="btn-secundario" onClick={() => toggleParticipantes(evento.id)}>
                  {mostrarParticipantes[evento.id] ? 'Ocultar Participantes' : 'Ver Participantes'}
                </button>

                <button className="btn-descargar" onClick={() => handleDescargarPdf(evento.id)}>
                  Descargar PDF
                </button>

                {mostrarParticipantes[evento.id] && (
                  <ul className="lista-participantes">
                    {participantesEvento[evento.id] === undefined ? (
                      <li>Cargando participantes...</li>
                    ) : participantesEvento[evento.id].length > 0 ? (
                      participantesEvento[evento.id].map(usuario => (
                        <li key={usuario.id}>
                          {usuario.username} - {usuario.email}
                        </li>
                      ))
                    ) : (
                      <li>No hay participantes.</li>
                    )}
                  </ul>
                )}

                <button className="btn-eliminar" onClick={() => handleEliminar(evento.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MisEventos;
