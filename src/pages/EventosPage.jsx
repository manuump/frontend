import { useEffect, useState } from 'react';
import eventoService from '../services/eventoService';

function EventosPage() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    eventoService.getEventos().then(setEventos);
  }, []);

  return (
    <div>
      <h2>Eventos</h2>
      <ul>
        {eventos.map(e => (
          <li key={e.id}>{e.nombre} - {e.fecha}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventosPage;