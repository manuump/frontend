import { useEffect, useState } from 'react';
import eventoService from '../services/eventoService';
import participacionService from '../services/participacionService';
import '../styles/EventosPage.css';

function EventosPage() {
  const [eventos, setEventos] = useState([]);
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [mensaje, setMensaje] = useState('');
  const eventosPorPagina = 6;

  useEffect(() => {
    eventoService.getEventos().then(data => {
      const ordenados = data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      setEventos(ordenados);
    });
  }, []);

  const handleParticipar = async (eventoId) => {
    try {
      const token = localStorage.getItem('token'); 
      if (!token) {
        setMensaje('Debes iniciar sesión para participar.');
        return;
      }
      await participacionService.participarEnEvento(eventoId, token);
      setMensaje('¡Participación registrada con éxito!');
    } catch (error) {
      setMensaje(error.response?.data?.message || 'Ya has participado en este evento.');
    }

    setTimeout(() => setMensaje(''), 4000);
  };

  const eventosFiltrados = eventos.filter(e => {
    if (!fechaFiltro) return true;
    return new Date(e.fecha) >= new Date(fechaFiltro);
  });

  const totalPaginas = Math.ceil(eventosFiltrados.length / eventosPorPagina);
  const indiceInicio = (paginaActual - 1) * eventosPorPagina;
  const indiceFin = indiceInicio + eventosPorPagina;
  const eventosPagina = eventosFiltrados.slice(indiceInicio, indiceFin);

  const handleAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const handleSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  const handleFechaFiltro = (e) => {
    setFechaFiltro(e.target.value);
    setPaginaActual(1);
  };

  return (
    <div className="eventos-container">
      <h2 className="eventos-title">Eventos</h2>

      {mensaje && <div className="mensaje">{mensaje}</div>}

      <div className="filtro-container">
        <label>Filtrar por fecha en adelante: </label>
        <input type="date" value={fechaFiltro} onChange={handleFechaFiltro} />
      </div>

      <div className="eventos-grid">
        {eventosPagina.map(e => (
          <div key={e.id} className="evento-card">
            <img src={e.imagenUrl} alt={e.nombre} className="evento-imagen" />
            <div className="evento-info">
              <h3 className="evento-nombre">{e.nombre}</h3>
              <p className="evento-descripcion">{e.descripcion}</p>
              <p className="evento-detalle"><strong>Fecha:</strong> {new Date(e.fecha).toLocaleString()}</p>
              <p className="evento-detalle"><strong>Ubicación:</strong> {e.ubicacion}</p>
              <p className="evento-detalle"><strong>Organizador:</strong> {e.organizador.username}</p>
              <button className="boton-participar" onClick={() => handleParticipar(e.id)}>
                Participar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="paginacion">
        <button onClick={handleAnterior} disabled={paginaActual === 1}>Anterior</button>
        <span>Página {paginaActual} de {totalPaginas}</span>
        <button onClick={handleSiguiente} disabled={paginaActual === totalPaginas}>Siguiente</button>
      </div>
    </div>
  );
}

export default EventosPage;
