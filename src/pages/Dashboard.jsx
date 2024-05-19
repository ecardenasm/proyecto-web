import {Routes, Route} from "react-router-dom";
import NavBar from "../components/NavBar";
import { useAuth } from "../Context/AuthProvider";
const Dashboard = () => {
    const auth = useAuth();
    return (
        <div>
        <h1>Bienvenidos a la pagina</h1>
        <Routes>
            <Route path="/" element={<NavBar/>}/>
        </Routes>
        <button onClick={()=> auth.logoutAction()}>Cerrar seccion</button>
        </div>
    );
}
export default Dashboard;