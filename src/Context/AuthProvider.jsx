import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const loginAction = (data) => {
    if(data.user==="admin" && data.password==="12345"){
        setUser(data.user);
        setToken(data.password);
        navigate('/dashboard');
    }
  }

  const logoutAction = () => {
    setUser("");
    setToken(null);
    navigate('/login');
  }
    
  return (
    <AuthContext.Provider value={{ user, token, loginAction, logoutAction}}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

//Hook Personlizado

export const useAuth = () => {
  return useContext(AuthContext);
}