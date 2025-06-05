import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CrearEvento.css'; 

function CrearEvento() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    fecha: '',
    ubicacion: '',
    imagenUrl: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8089/eventos', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Evento creado con éxito');
      navigate('/mis-eventos');
    } catch (error) {
      console.error('Error al crear el evento', error);
      alert('No se pudo crear el evento. Asegúrate de tener el rol EMPRESA');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Crear nuevo evento</h2>
      <form onSubmit={handleSubmit} className="form-evento">
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label>Descripción:</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required />

        <label>Fecha:</label>
        <input type="datetime-local" name="fecha" value={formData.fecha} onChange={handleChange} required />

        <label>Ubicación:</label>
        <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} required />

        <label>URL de imagen:</label>
        <input type="text" name="imagenUrl" value={formData.imagenUrl} onChange={handleChange} />

        <button type="submit" className="btn btn-primary mt-3">Crear Evento</button>
      </form>
    </div>
  );
}

export default CrearEvento;
