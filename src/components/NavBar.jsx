import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/eventos">Eventos</Link>
    </nav>
  );
}

export default Navbar;