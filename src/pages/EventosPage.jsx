import { useEffect, useState } from 'react';
import eventoService from '../services/eventoService';
import '../styles/EventosPage.css';

function EventosPage() {
  const [eventos, setEventos] = useState([]);
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const eventosPorPagina = 6;

  useEffect(() => {
    eventoService.getEventos().then(data => {
      const ordenados = data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      setEventos(ordenados);
    });
  }, []);

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
