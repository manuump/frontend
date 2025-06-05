import { useEffect, useState } from "react";

function DashboardPage() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    role: ""
  });

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
      } catch (error) {
        console.error("Error al decodificar el token", error);
      }
    }
  }, []);

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "10px", fontFamily: "'Montserrat', sans-serif" }}>
      <h2>Panel del Usuario</h2>
      <div style={{ marginTop: "20px" }}>
        <p><strong>Usuario:</strong> {userInfo.username}</p>
        <p><strong>Rol:</strong> {userInfo.role}</p>
      </div>
    </div>
  );
}

export default DashboardPage;
