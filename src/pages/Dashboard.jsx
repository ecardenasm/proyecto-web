import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Dashboard = () => {
    
    return (
        <div>
        <h1>Bienvenidos a la pagina</h1>
        <NavBar/>
        <div>
            <Outlet />
        </div>
        
        </div>
    );
}
export default Dashboard;