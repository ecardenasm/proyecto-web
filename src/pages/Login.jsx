import { useAuth } from "../Context/AuthProvider";
import { useState } from "react";

const Login = () => {
    const auth= useAuth();
    const [data, setData] = useState({ user: "", password: "" });

    const [passwordType, setPasswordType] = useState(false) ;

    const handlePassword = () => { 
        setPasswordType(!passwordType);
    }

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

    const showAlert = () => {
        alert("Comming soon!");
    }

    return (
        <div className="contenedor">
            <div className="contenedor-login">
            <h1>Inicio de Sesion</h1>
            
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="user-name">Usuario</label>
                        <input type="text" id="user-name" name="user" placeholder="Usuario" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-pass">Contraseña</label>
                        <div className="input-password">
                            <input type={passwordType ? 'text': 'password'} id="user-pass" name="password" placeholder="Contraseña" onChange={handleChange} />   
                            <button type="button" className="password" onClick={handlePassword}>{passwordType ? '': '' }</button>
                        </div>

                    </div>
                    <button type="submit" className="btn-submit">Iniciar Sesion</button>
                </form>
                <div className="container-icon">
                    <span className="icon-contacts" onClick={showAlert}>󰊤</span>
                    <span className="icon-contacts google" onClick={showAlert}></span>
                    <span className="icon-contacts facebook" onClick={showAlert}></span>
                </div>
            </div>
        </div>
    );
}

export default Login;