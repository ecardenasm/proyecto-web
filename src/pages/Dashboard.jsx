import { useAuth } from "../Context/AuthProvider";
const Dashboard = () => {
    const auth = useAuth();
    return (
        <div>
        <h1>Bienvenidos a la pagina</h1>
        <button onClick={()=> auth.logoutAction()}>Cerrar seccion</button>
        </div>
    );
}
export default Dashboard;