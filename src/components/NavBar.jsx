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
          <Link to="perfil">Perfil</Link>
        </li>
        <li>
        <button className="btn-cerrar" onClick={()=> auth.logoutAction()}>Cerrar sewion</button>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;