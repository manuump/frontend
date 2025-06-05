import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import EventosPage from './pages/EventosPage';
import AdminUserPage from './pages/AdminUserPage';
import MisEventos from './pages/MisEventos';
import CrearEvento from './pages/CrearEvento';
import Contacto from './pages/Contacto.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eventos"
          element={
            <ProtectedRoute>
              <EventosPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/usuarios"
          element={
            <ProtectedRoute>
              <AdminUserPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mis-eventos"
          element={
            <ProtectedRoute>
              <MisEventos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/crear-evento"
          element={
            <ProtectedRoute>
              <CrearEvento />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
