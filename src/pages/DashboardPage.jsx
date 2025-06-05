import { useEffect, useState } from "react";
import participacionService from "../services/participacionService";

function DashboardPage() {
  const [userInfo, setUserInfo] = useState({ username: "", email: "", role: "" });
  const [participaciones, setParticipaciones] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payloadBase64 = token.split(".")[1];
        const payload = JSON.parse(atob(payloadBase64));
        setUserInfo({
          username: payload.username || "",
          email: payload.email || "",
          role: payload.role || ""
        });
        cargarParticipaciones();
      } catch (error) {
        console.error("Error al decodificar el token", error);
      }
    }
  }, []);

  const cargarParticipaciones = () => {
    participacionService.getMisParticipaciones()
      .then(data => setParticipaciones(data))
      .catch(err => console.error("Error al cargar participaciones", err));
  };

  const handleCancelar = (id) => {
    if (window.confirm("¿Estás seguro de que quieres cancelar tu participación?")) {
      participacionService.cancelarParticipacion(id)
        .then(() => cargarParticipaciones())
        .catch(err => console.error("Error al cancelar participación", err));
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "10px", fontFamily: "'Montserrat', sans-serif" }}>
      <h2>Panel del Usuario</h2>
      <div style={{ marginTop: "20px" }}>
        <p><strong>Usuario:</strong> {userInfo.username}</p>
        <p><strong>Rol:</strong> {userInfo.role}</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Eventos en los que participas:</h3>
        {participaciones.length === 0 ? (
          <p>No estás apuntado a ningún evento.</p>
        ) : (
          participaciones.map(p => (
            <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px", borderRadius: "8px" }}>
              <h4>{p.evento.nombre}</h4>
              <p><strong>Fecha:</strong> {new Date(p.evento.fecha).toLocaleString()}</p>
              <p><strong>Ubicación:</strong> {p.evento.ubicacion}</p>
              <button onClick={() => handleCancelar(p.id)} style={{ backgroundColor: "#d9534f", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
                Desapuntarse
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
