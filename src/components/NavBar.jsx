import { Link} from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const NavBar = () => {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <Link to="" >Inicio</Link>
        </li>
        <li>
          <Link to="lugares">Lugares</Link>
        </li>
        <li>
          <Link to="personas">Personas</Link>
        </li>
        <li>
        <button onClick={()=> auth.logoutAction()}>Cerrar seccion</button>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;