import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/lugares">Lugares</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}
export default NavBar;