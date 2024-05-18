import { useAuth } from "../Context/AuthProvider";
import { useState } from "react";

const Login = () => {
    const auth= useAuth();
    const [data, setData] = useState({ user: "", password: "" });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
        //setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.user !== "" || data.password !== "") {
            try{
                auth.loginAction(data);
            }catch(error){
                console.log(error);
            }            
            return;
        }
        alert("Usuario o contraseña incorrecta");
    }

    return (
        <div>
            <h1>Inicio de seccion</h1>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="user-name">Usuario</label>
                <input type="text" id="user-name" name="user" placeholder="Usuario" onChange={handleChange} />
                <label htmlFor="user-pass">Contraseña</label>
                <input type="password" id="user-pass" name="password" placeholder="Contraseña" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
            
        </div>
    );
}

export default Login;